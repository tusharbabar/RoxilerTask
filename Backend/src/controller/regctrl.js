let model=require("../model/model.js");



exports.login = (req, res) => {
    const { email, password } = req.body;

    model.logindb(email, password).then((result) => {
            if (result.length > 0) {
               res.send(result[0]);
            } else {
                res.send("User not found");
            }
        })
        .catch((err) => {
            console.error("Login error:", err);
        });
};

exports.register=(req,res)=>{

  let {name,email,password,address,role}=req.body;
  let result=model.registerUser(name,email,password,address,role);
  result.then((r)=>{
    
    if(r. affectedRows>0){
          res.send("Data added successfully");
    }else{
      res.send("Data not added");
    }
  })
  .catch(err=>console.log(err))
}


exports.viewusers=(req,res)=>{

  let result=model.viewusers();
  result.then((r)=>{
    if(r.length!=0){
          res.send(r);
    }else{
      res.send(r);
    }
  })
  .catch(err=>console.log(err))
}
 


exports.ownerData=(req,res)=>{

        let result=model.ownerData();
        result.then((r)=>{
          if(r.length!=0){
                res.send(r);
          }else{
            res.send(r);
          }
        })
        .catch(err=>console.log(err))
}

exports.addstore=(req,res)=>{
 let {name,address,owner_id}=req.body;

    let result=model.addstore(name,address,owner_id);

    result.then( (r)=>{
       if(r.affectedRows>0){
        res.send("Store Addaed Successfully");
       }
       else{
        res.send("Store not Added");
       }

    }).catch((err)=>{
       console.log(err);
    })
}



exports.viwestore = (req, res) => {

  model.viewStore().then((result) => {
      res.send(result);
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });
};




exports.addRating=(req,res)=>{

  let {store_id,user_id,rating}=req.body;

  model.addRating(store_id,user_id,rating).then((r)=>{
   
    if(r.affectedRows > 0)
    {
      res.send("Rating Added Succesfully");
    }
    else{
      res.send("Rating not Added Try Again");
    }

  });

}


exports.avgRating = (req, res) => {
  let id=req.params.id;

  model.avgRating(id).then((result) => {
      res.send(result);
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });
};

exports.allRating = (req, res) => {
 let id=req.params.id;
  model.allRating(id).then((result) => {
      res.send(result);
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });
};



exports.deleteStore = (req, res) => {
  let id=req.params.id;
  
  model.deleteStore(id).then((result) => {
      res.send("delete Store");
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });
};


exports.totalUser = (req, res) => {

  model.totalUser().then((result) => {
      res.send(result[0].count.toString());
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });
};


exports.totalStore = (req, res) => {

  model.totalStore().then((result) => {
      res.send(result[0].count.toString());
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });
};