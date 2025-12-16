import express from "express"
import posts from "./array/posts.js"

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog");
})

app.get('/posts', (req, res) => {
    res.json(posts);
});


app.listen(port, () => {
    console.log("In ascolto dalla porta ", port);
})