
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');  // на сайте app.set - но в уроке use

app.get("/", function(req, res) {

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    // if (currentDay === 6 || currentDay === 0) {
    //     day = "weekend";
    // } else {
    //     day = "weekday";
    // }
    if (currentDay === 1) {
        day = "Monday!!!!!";
    } else if (currentDay === 2) {
        day = "Thusday!!!!!";
    } else if (currentDay === 3) {
        day = "Whendsday!!!!!";
    } else if (currentDay === 4) {
        day = "Thursday!!!!!";
    } else if (currentDay === 5) {
        day = "Friday!!!!!";
    } else if (currentDay === 6) {
        day = "Saturday!!!!!";
    } else if (currentDay === 0) {
        day = "Sunday!!!!!";
    }
    switch (currentDay) {
        case 1:
            day = "Monday!!!!!";
        break;
        
        default:
            break;
    }
    
    res.render("list", {kindOfDay: day});
    // res.send("Hello!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});