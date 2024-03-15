import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts=[];

app.get("/", (req, res)=>{
    res.render(__dirname+"/view/index.ejs", {
        posts : posts,
    });
});

app.get("/form", (req, res)=>{
    res.render(__dirname+"/view/form.ejs");
});

app.get("/posts/:id", (req, res)=>{
    const id=parseInt(req.params.id);
    const foundPost=posts.find((post)=> post.id===id);
    res.render(__dirname+"/view/form.ejs", {
        foundPost : foundPost,
    });
});

app.post("/submit", (req, res)=>{
    const newPost={
      id: posts.length +1,
      postTitle: req.body.postTitle,
      postContent: req.body.postContent,
    }
    posts.push(newPost);
    console.log(posts.slice(-1));
    res.render(__dirname+"/view/index.ejs", {
        posts : posts,
    });
});

app.post("/edit/:id", (req, res)=>{
    const id=parseInt(req.params.id);
    const replacementPost ={
      id: id,
      postTitle: req.body.postTitle,
      postContent: req.body.postContent,
    };
    const searchIndex = posts.findIndex((post)=> post.id===id);
    posts[searchIndex]=replacementPost;
    res.redirect('/');
});

app.get("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const searchIndex = posts.findIndex((post)=> post.id===id);
    if (searchIndex > -1) {
      posts.splice(searchIndex, 1);
      res.redirect('/');
    } else {
      res.sendStatus(404);
    }
  });

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});