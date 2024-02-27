import express from "express"
const app = express();
const port=3000;

app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
});
app.get("/about", (req, res)=>{
    res.send("<h1>About Me</h1><p>My name is Rupayan.</p>");
});
app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Me</h1><p>My mobile no is 6289383193</p>");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});