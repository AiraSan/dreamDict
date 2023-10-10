const express = require("express");
const data = require("./Data")
const myanmarNumbers = require("myanmar-numbers");
const app = express();

const port = 3000;
app.listen(port, () => console.log(`Port ${port} is running...`));

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static('dist'));


// routes
app.get("/", (req, res) => {
    res.render("index", {blogDetail: data.BlogDetail})
})

app.get("/alphabet", (req, res) => {
    res.render("alphabet", {blogHeader: data.BlogHeader});
})

app.get("/alphabet/:id", (req, res) => {
    const id = req.params.id;
    const filteredBlogs = data.BlogDetail.filter(blog => blog.BlogId == id);
    const numberArr = filteredBlogs.map((blog, index) => myanmarNumbers(index + 1, "my"));
    res.render("details", {title: data.BlogHeader[id].BlogTitle,blogs: filteredBlogs, numberArr})
})