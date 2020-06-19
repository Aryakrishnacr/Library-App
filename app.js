const express=require("express");
const nav=[
    {
        link:'/books',name:'books'},
{
    link:'/authors',name:'authors'},
{
        link:'/signup',name:'signup'},
    {
            link:'/login',name:'login'},
     {
            link:'/addbook',name:'add book'}
    


];

const booksRouter=require("./src/routes/booksRoutes")(nav)
const authorsRouter=require("./src/routes/authorsRoutes")(nav)
const signupRouter=require("./src/routes/signupRoutes")(nav)
const loginRouter=require("./src/routes/loginRoutes")(nav)
const addbooksRouter=require("./src/routes/addbooksRoutes")(nav)

const app=new express();
app.use(express.static('./public'));
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/signup",signupRouter);
app.use("/login",loginRouter);
app.use("/addbook",addbooksRouter);

app.set('view engine','ejs');
app.set('views','./src/views');
app.get('/',function(req,res){
    res.render("index",{
    nav,
    title:'library'
});
});


app.listen(5000);
