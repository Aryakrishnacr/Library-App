const express=require("express");
const addbooksRouter=express.Router();
function router(nav){


    
    addbooksRouter.get('/',function(req,res){
        res.render("addbook",{nav,
        title:'library'
    
    });
    });
    
    return addbooksRouter;
}

module.exports=router;