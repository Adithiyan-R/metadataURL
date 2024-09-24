const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        name : "FAF",
        symbol : "F",
        image : "https://imgs.search.brave.com/u1hYxktvmjjsIhjJGcqC5caMSr3QFojRZssEjkFEb-o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY0L0ZhZl9kdV9Q/bGVzc2lzXygwMiku/anBn"
    })
})

app.listen(3000,()=>{
    console.log("app is running on port 3000")
})