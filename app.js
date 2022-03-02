const express = require("express")
const app = express()
const port = 5000
const moment = require("moment") //for dates 
app.locals.moment = moment; 

//static files
app.use(express.static("public"))

//templates engine
app.set("view engine","ejs")

// parsing middleware
app.use(express.urlencoded({extended: true}));
app.use("/",require("./routes/news"))

app.set("views","./views")

app.listen(port, ()=> console.log("Server started on port:",port))
