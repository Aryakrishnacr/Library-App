const express=require("express");
const signupRouter=express.Router();
function router(nav){
    
    signupRouter.get('/',function(req,res){
        res.render("signup",{nav,
        title:'library',
        
    
    });
    });
    signupRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render("book",{nav,
        title:'library',
        
    
    });
    });
    return signupRouter;

}

module.exports=router;