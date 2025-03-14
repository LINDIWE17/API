const express = require("express");
const app = express();
const port = 3000

const schoolUniform = [
    {"id": 1, 
     "item": "grayTrouser"},
    
    {"id": 2, 
    "item": "girlsTunic"},
    
    {"id": 3,  
     "item": "sportsShirt"}
];

    app.get("/schoolUniform", (req, res) => {
        res.send(schoolUniform);  
});  

    app.post("/schoolUniform", (req, res) => {
        const schoolUniform = {
            "id": 4,  
            "item": "socks"
        };
        schoolUniform.push(schoolUniform);
        const res = {
            massage: "Socks successefully created."
        } 
});  




app.listen(port, () => {
    console.log("Server listening to port: $(port)")
})