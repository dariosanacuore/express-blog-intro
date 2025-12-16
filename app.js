import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});


app.listen(port, () => {
    console.log("In ascolto dalla porta ", port);
})