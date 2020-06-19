const express=require("express");
const booksRouter=express.Router();
function router(nav){
    var books=[
        { 
            title:'Aadujeevitham',
            author:'Benyamin',
            genre:'Novel',
            img:'book1.jpg'
        },
        { 
            title:'Wings of Fire',
            author:'A P J Abdul Kalam',
            genre:'AutoBiography',
            img:'book2.jpg'
        },
        { 
            title:"Devil's Advocate",
            author:'Karan Thapar',
            genre:'AutoBiography',
            img:'book3.jpg'
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{nav,
        title:'library',
        books
    
    });
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render("book",{nav,
        title:'library',
        book:books[id]
    
    });
    });
    return booksRouter;

}

module.exports=router;