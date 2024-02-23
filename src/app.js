const path = require("path")
const request = require("request");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");


// console.log(__dirname,'')
// console.log(path.join(__dirname,'../public'))

const app = express();

const publicdirectorypath = path.join(__dirname, "../public");
// const publicdirectorypathcss = path.join(__dirname, "../public/css");
// const publicdirectorypathjs = path.join(__dirname, "../public/js");

////customizing the viws directory
const viewsPath = path.join(__dirname, "../templates/views");
////

////connecting partials path
const partialsPath = path.join(__dirname, "../templates/partials");
////

app.set("view engine", "hbs"); //to set up hbs

////customizing the viws directory
app.set("views", viewsPath);
////
////connecting partials path
hbs.registerPartials(partialsPath);
////

app.use(express.static(publicdirectorypath)); //connecting css
// app.use(express.static(publicdirectorypathimg)); //connecting index.html
// app.use(express.static(publicdirectorypathjs)); //connecting js

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Abhit"
    
  });
});

app.get("/weather", (req, res) => {
  
 
  if (!req.query.address) {
      return res.send(
      {
        error: "Could not find the address",
      },
    );
  }
  geocode(req.query.address, (error, lpath = {}) => {
    if (error) {
      return res.send({ error });
    }
   
      res.send({
        
        lpath,
        
      })
    
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
  });
});

app.get('*',(req,res)=>{

    res.render('404',{
      title:'404',
      errorMessage:"Page Not Found",
    })

})

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
