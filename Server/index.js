const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
dotenv.config()
const { Schema } = mongoose


dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("<h1>Admin Panel</h1>")
})
const datasSchems = new Schema(
  {
    ProductName: { type: String, required: true },
    ProductInfo: { type: String, required: true },
    ProductPrice: { type: Number, required: true },
    ProductUrl: { type: String, required: true },
    Category: { type: String, required: true },
  },
  { timestamps: true }
);
const datas = mongoose.model('datas', datasSchems)
//!get
app.get("/datas", (req, res) => {
  datas.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!post
app.post("/datas", (req, res) => {
  const data = new datas({
    ProductName: req.body.ProductName,
    ProductInfo: req.body.ProductInfo,
    ProductPrice: req.body.ProductPrice,
    ProductUrl:req.body.ProductUrl,
    Category:req.body.Category
  });
  data.save();
  res.send("Done");
});
//!id
app.get("/datas/:id", (req, res) => {
  const { id } = req.params;
  datas.findById(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!delete
app.delete("/datas/:id", (req, res) => {
  const { id } = req.params;
  datas.findByIdAndDelete(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!put
app.put("/datas/:id", (req, res) => {
  const { id } = req.params;
  datas.findByIdAndUpdate(id, req.body)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});


require("./UserDetails")
const User = mongoose.model("UserInfo")





app.get("/userData", (req, res) => {
  User.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!id
app.get("/userData/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!delete
app.delete("/userData/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!put
app.put("/userData/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndUpdate(id, req.body)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!Login-register-resetPassword

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
  } catch (error) { }
});

app.get("/register", (req, res) => {
  User.find({}, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(404).json({ message: err })
    }
  })
})
app.post("/register", async (req, res) => {
  const { email, password, firstname, phone, lastname, address, UserType } = req.body
  const encryptPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email })
    if (oldUser) {
      return res.json({ error: "User Exists" })
    }
    await User.create({
      email,
      password: encryptPassword,
      firstname,
      phone,
      lastname,
      address,
      UserType,
    });
    res.send({ status: "201" })
  } catch (error) {
    res.send({ status: "error" })
  }

})

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
      
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
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
    const link = `https://projectewtwtregsdfg.onrender.com/reset-password/${oldUser._id}/${token}`;
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

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (error) { }
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

const OrderSchema = new Schema(
  {
    basket:{type:Array,required:true},
  },
  { timestamps: true }
);
const Orders = mongoose.model('Orders', OrderSchema)
//!get
app.get("/orders", (req, res) => {
  Orders.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!post
app.post("/orders", (req, res) => {
  const order = new Orders({
    basket:req.body,
  });
  order.save();
  res.send("Done");
});
//!id
app.get("/orders/:id", (req, res) => {
  const { id } = req.params;
  Orders.findById(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!delete
app.delete("/orders/:id", (req, res) => {
  const { id } = req.params;
  Orders.findByIdAndDelete(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!put
app.put("/orders/:id", (req, res) => {
  const { id } = req.params;
  Orders.findByIdAndUpdate(id, req.body)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
const reservationSchema = new Schema(
  {
    name: { type: Array, required: true },
    email:{type:String,required:true}
  },
  { timestamps: true }
);
const reservation = mongoose.model('reserv', reservationSchema)
//!get
app.get("/reservation", (req, res) => {
  reservation.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!post
app.post("/reservation", (req, res) => {
  const reserv = new reservation({
    name: req.body.name,
    email:req.body.email
  });
  reserv.save();
  res.send("Done");
});
//!id
app.get("/reservation/:id", (req, res) => {
  const { id } = req.params;
  reservation.findById(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!delete
app.delete("/reservation/:id", (req, res) => {
  const { id } = req.params;
  reservation.findByIdAndDelete(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!put
app.put("/reservation/:id", (req, res) => {
  const { id } = req.params;
  reservation.findByIdAndUpdate(id, req.body)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});





const contactsSchema = new Schema(
  {
    name: { type: Array, required: true },
      email:{type:String,required:true}
  },
  { timestamps: true }
);
const contacts = mongoose.model('contactRequest', contactsSchema)
//!get
app.get("/contacts", (req, res) => {
  contacts.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!post
app.post("/contacts", (req, res) => {
  const contact = new contacts({
    name: req.body.name,
    email:req.body.email,
    subject: req.body.subject,
    message:req.body.message,
  });
  contactc.save();
  res.send("Done");
});
//!id
app.get("/contacts/:id", (req, res) => {
  const { id } = req.params;
  contacts.findById(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!delete
app.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;
  contacts.findByIdAndDelete(id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
//!put
app.put("/contacts/:id", (req, res) => {
  const { id } = req.params;
  contacts.findByIdAndUpdate(id, req.body)
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500).json({ error: message });
    });
});
const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace('<password>', process.env.PASSWORD)
mongoose.set('strictQuery', true)
mongoose
  .connect(url)
  .then((succes) => {
    app.listen(PORT, () => {
      console.log("Start Server");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
