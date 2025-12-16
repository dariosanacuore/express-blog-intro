import express from "express"
import posts from "./array/posts.js"
import fs from 'fs';


const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog");
})

app.get('/posts', (req, res) => {
    res.json(posts);
})


app.get('/bacheca', (req, res) => {
    const immagini = fs.readdirSync('public/img');

    const newArray = [];

    for (let i = 0; i < posts.length; i++) {
        const post = {
            ...posts[i],
            img: `/img/${immagini[i]}`
        };

        newArray.push(post);
    }

    res.json({
        conteggio: newArray.length,
        lista: newArray
    });
});

app.listen(port, () => {
    console.log("In ascolto dalla porta ", port);
})
