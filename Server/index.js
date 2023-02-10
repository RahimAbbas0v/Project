const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")

dotenv.config()
const {Schema}=mongoose
const CoffeSchema = new Schema({
    ProductName:{type:String,required:true},
    ProductInfo:{type:String,required:true},
    ProductPrice:{type:Number,required:true},
    ProductUrl:{type:String,required:true},

},{
    timestamps:true
})

const Coffes=mongoose.model('Coffes',CoffeSchema)

const app=express()
app.use(cors())
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})

app.get("/Coffes",(req,res)=>{
    Coffes.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})
app.get("/Coffes/:id",(req,res)=>{
    const {id}=req.params
    Coffes.findById(id,(err,doc)=>{
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


app.post("/Coffes",(req,res)=>{
    const coffe=new Coffes({
        ProductName:req.body.ProductName,
        ProductInfo:req.body.ProductInfo,
        ProductPrice:req.body.ProductPrice,
        ProductUrl:req.body.ProductUrl
    })
    coffe.save()
    res.send("Added")
})
app.delete("/Coffes/:id",(req,res)=>{
    const {id}=req.params
    Coffes.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(404).json({message:err})
        }
    })
})

const BeefSchema = new Schema({
    ProductName:{type:String,required:true},
    ProductInfo:{type:String,required:true},
    ProductPrice:{type:Number,required:true},
    ProductUrl:{type:String,required:true},

},{
    timestamps:true
})

const Beefs=mongoose.model('Beefs',BeefSchema)



app.get("/Beefs",(req,res)=>{
    Beefs.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})
app.get("/Beefs",(req,res)=>{
    Beefs.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})

app.get("/Beefs/:id",(req,res)=>{
    const {id}=req.params
    Beefs.findById(id,(err,doc)=>{
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


app.post("/Beefs",(req,res)=>{
    const beef=new Beefs({
        ProductName:req.body.ProductName,
        ProductInfo:req.body.ProductInfo,
        ProductPrice:req.body.ProductPrice,
        ProductUrl:req.body.ProductUrl
    })
    beef.save()
    res.send("Added")
})
app.delete("/Beefs/:id",(req,res)=>{
    const {id}=req.params
    Beefs.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(404).json({message:err})
        }
    })
})


const DrinksSchema = new Schema({
    ProductName:{type:String,required:true},
    ProductInfo:{type:String,required:true},
    ProductPrice:{type:Number,required:true},
    ProductUrl:{type:String,required:true},

},{
    timestamps:true
})

const Drinks=mongoose.model('Drinks',DrinksSchema)



app.get("/Drinks",(req,res)=>{
    Drinks.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})
app.get("/Drinks",(req,res)=>{
    Drinks.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})

app.get("/Drinks/:id",(req,res)=>{
    const {id}=req.params
    Drinks.findById(id,(err,doc)=>{
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


app.post("/Drinks",(req,res)=>{
    const drink=new Drinks({
        ProductName:req.body.ProductName,
        ProductInfo:req.body.ProductInfo,
        ProductPrice:req.body.ProductPrice,
        ProductUrl:req.body.ProductUrl
    })
    drink.save()
    res.send("Added")
})
app.delete("/Drinks/:id",(req,res)=>{
    const {id}=req.params
    Drinks.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(404).json({message:err})
        }
    })
})



const CakeSchema = new Schema({
    ProductName:{type:String,required:true},
    ProductInfo:{type:String,required:true},
    ProductPrice:{type:Number,required:true},
    ProductUrl:{type:String,required:true},

},{
    timestamps:true
})

const Cakes=mongoose.model('Cakes',CakeSchema)



app.get("/Cakes",(req,res)=>{
    Cakes.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})
app.get("/Cakes",(req,res)=>{
    Cakes.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})

app.get("/Cakes/:id",(req,res)=>{
    const {id}=req.params
    Cakes.findById(id,(err,doc)=>{
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


app.post("/Cakes",(req,res)=>{
    const cake=new Cakes({
        ProductName:req.body.ProductName,
        ProductInfo:req.body.ProductInfo,
        ProductPrice:req.body.ProductPrice,
        ProductUrl:req.body.ProductUrl
    })
    cake.save()
    res.send("Added")
})
app.delete("/Cakes/:id",(req,res)=>{
    const {id}=req.params
    Cakes.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(404).json({message:err})
        }
    })
})

const FastfoodSchema = new Schema({
    ProductName:{type:String,required:true},
    ProductInfo:{type:String,required:true},
    ProductPrice:{type:Number,required:true},
    ProductUrl:{type:String,required:true},

},{
    timestamps:true
})

const Fastfood=mongoose.model('Fastfood',FastfoodSchema)



app.get("/Fastfood",(req,res)=>{
    Fastfood.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})
app.get("/Fastfood",(req,res)=>{
    Fastfood.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(404).json({message:err})
    }})
})

app.get("/Fastfood/:id",(req,res)=>{
    const {id}=req.params
    Fastfood.findById(id,(err,doc)=>{
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


app.post("/Fastfood",(req,res)=>{
    const food=new Fastfood({
        ProductName:req.body.ProductName,
        ProductInfo:req.body.ProductInfo,
        ProductPrice:req.body.ProductPrice,
        ProductUrl:req.body.ProductUrl
    })
    food.save()
    res.send("Added")
})
app.delete("/Fastfood/:id",(req,res)=>{
    const {id}=req.params
    Fastfood.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(404).json({message:err})
        }
    })
})


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