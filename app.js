const express = require("express");
const data = require("./Data")
const app = express();

const port = 3000;
app.listen(port, () => console.log(`Port ${port} is running...`));

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static('dist'));


// routes
app.get("/", (req, res) => {
    res.render("index", {blogHeader: data.BlogHeader});
})

app.get("/:id", (req, res) => {
    const id = req.params.id;
    const filteredBlogs = data.BlogDetail.filter(blog => blog.BlogId == id);
    res.render("details", {blogs: filteredBlogs})
    // if (filteredBlogs.length > 0) {
    //     Display the filtered blog content
    //     filteredBlogs.forEach(blog => {
    //       res.render("details", {blog})
    //     });
    //   } else {
    //     console.log("No blogs found for the given BlogId.");
    //   }

    // data.BlogDetail.forEach(blog => {
    //     if(blog.BlogId == id) {
    //         res.send(data.BlogDetail[id])
    //     }
    // })
    // res.render("details", {blogHeader: data.BlogHeader, blogDetail: data.BlogDetail})
})