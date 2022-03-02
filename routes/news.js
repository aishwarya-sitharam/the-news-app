const express = require("express")
const axios = require("axios")
const newsroute = express.Router()
const moment = express("moment")

newsroute.get("/", async(req,res) => {
    try {
        var url = "https://newsapi.org/v2/top-headlines?"+"country=us"+"&apiKey=27795425143445ba89f4a5e6ebccd5d1"; 

        const get_news = await axios.get(url)   
        // console.log("data",get_news.data.articles)
        res.render("news", {articles:get_news.data.articles});

    } catch(error) {
        if(error.response) {
            console.log("Error details:",error)
        }
    }
})


newsroute.post("/search", async(req,res) => {
    const search = req.body.search
    //console.log(req.body.search)


    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=27795425143445ba89f4a5e6ebccd5d1`  
        const get_news =await axios.get(url)
        //console.log(get_news)
        res.render("news", {articles:get_news.data.articles, search:search})

    } catch(error) {
        if(error.response) {
            console.log("Error details:",error)
        }
    }
})


module.exports = newsroute