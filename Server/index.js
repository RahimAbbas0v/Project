const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
dotenv.config()
const {Schema}=mongoose

const imgsSchema = new Schema({
    ProductUrl:{type:String,required:true},

},{
    timestamps:true
})

const imgs=mongoose.model('imgs',imgsSchema)

const app=express()
app.use(cors())
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})

const datasSchems = new Schema({
    ProductName:{type:String,required:true},
    ProductInfo:{type:String,required:true},
    ProductPrice:{type:Number,required:true},
    ProductUrl:{type:String,required:true},
    Category:{type:String,required:true},


},{
    timestamps:true
})

const datas=mongoose.model('datas',datasSchems)



app.get("/datas",(req,res)=>{
    datas.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})

app.get("/datas/:id",(req,res)=>{
    const {id}=req.params
    datas.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:"Not Found"})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
})


app.post("/datas",(req,res)=>{
    const data=new datas({
        ProductName:req.body.ProductName,
        ProductInfo:req.body.ProductInfo,
        ProductPrice:req.body.ProductPrice,
        ProductUrl:req.body.ProductUrl,
        Category:req.body.Category,
    })
    data.save()
    res.send("Added")
})
app.delete("/datas/:id",(req,res)=>{
    const {id}=req.params
    datas.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(404).json({message:err})
        }
    })
})


require("./UserDetails")
const User=mongoose.model("UserInfo")

app.get("/register",(req,res)=>{
    User.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }})
})
app.post("/register",async (req,res)=>{
    const { email, password,firstname,phone, lastname,address,UserType}=req.body
    const encryptPassword=await bcrypt.hash(password,10);
    try{
        const oldUser =await User.findOne({email})
        if(oldUser){
            return res.json({error:"User Exists"})
        }
        await User.create({
            email,
            password:encryptPassword,
            firstname,
            phone, 
            lastname,
            address,
            UserType,
        });
        res.send({status:"201"})
    }catch (error){
        res.send({status: "error"})
    }

})

app.post("/login-user", async (req,res)=>{
    const {email,password}=req.body
    const user= await User.findOne({email});
    if(!user){
        return res.json({error:"User Not Found"});
    }
    if(await bcrypt.compare(password,user.password)){
        const token=jwt.sign({},JWT_SECRET);
        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({status: "error",error:"InvAlid Password"});
});
app.get("/userData",(req,res)=>{
  User.find({},(err,docs)=>{
      if(!err){
          res.send(docs)
      }else{
          res.status(404).json({message:err})
      }})
})
app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});



app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
      const oldUser = await User.findOne({ email });
      if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
      }
      const secret = JWT_SECRET + oldUser.password;
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
        expiresIn: "5m",
      });
      const link = `http://localhost:4000/reset-password/${oldUser._id}/${token}`;
      var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rehim6417@gmail.com',
              pass: 'xjrg corf ihiv ains'
            }
          });
          var mailOptions = {
            from: 'rehim6417@gmail.com',
            to: oldUser.email,
            subject: 'Reset Password',
            text: link,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    } catch (error) {}
  });
  
  app.get("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      res.render("index", { email: verify.email, status: "Not Verified" });
    } catch (error) {
      console.log(error);
      res.send("Not Verified");
    }
  });
  
  app.post("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
  
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      const encryptedPassword = await bcrypt.hash(password, 10);
      await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: encryptedPassword,
          },
        }
      );
  
      res.render("index", { email: verify.email, status: "verified" });
    } catch (error) {
      console.log(error);
      res.json({ status: "Something Went Wrong" });
    }
  });

//   app.get("/imgs",(req,res)=>{
//     imgs.find({},(err,docs)=>{
//     if(!err){
//         res.send(docs)
//     }else{
//         res.status(404).json({message:err})
//     }})
// })
// app.get("/imgs",(req,res)=>{
//     imgs.find({},(err,docs)=>{
//     if(!err){
//         res.send(docs)
//     }else{
//         res.status(404).json({message:err})
//     }})
// })

// app.get("/imgs/:id",(req,res)=>{
//     const {id}=req.params
//     imgs.findById(id,(err,doc)=>{
//         if(!err){
//             if(doc){
//                 res.send(doc)
//             }else{
//                 res.status(404).json({message:"Not Found"})
//             }
//         }else{
//             res.status(500).json({message:err})
//         }
//     })
// })


// app.post("/imgs",(req,res)=>{
//     const img=new imgs({
//         ProductUrl:req.body.ProductUrl
//     })
//     img.save()
//     res.send("Added")
// })
// app.delete("/imgs/:id",(req,res)=>{
//     const {id}=req.params
//     imgs.findByIdAndDelete(id,(err,doc)=>{
//         if(!err){
//             res.send(doc)
//         }else{
//             res.status(404).json({message:err})
//         }
//     })
// })





const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace('<password>',process.env.PASSWORD)
mongoose.set('strictQuery',true)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connected");
        app.listen(PORT,()=>{
        console.log("Server Started");
        })
    }
})