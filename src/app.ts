import express from "express";

const port = 5050;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`)
})