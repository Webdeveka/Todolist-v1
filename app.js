
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = ["Buy Food", "Cook Food"];
let workItems = [];
app.set('view engine', 'ejs'); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    // let currentDay = today.getDay();
    let day = today.toLocaleDateString("en-GB", options);
    // if (currentDay === 6 || currentDay === 0) {
    //     day = "weekend";
    // } else {
    //     day = "weekday";
    // }
    // if (currentDay === 1) {
    //     day = "Monday!!!!!";
    // } else if (currentDay === 2) {
    //     day = "Thusday!!!!!";
    // } else if (currentDay === 3) {
    //     day = "Whendsday!!!!!";
    // } else if (currentDay === 4) {
    //     day = "Thursday!!!!!";
    // } else if (currentDay === 5) {
    //     day = "Friday!!!!!";
    // } else if (currentDay === 6) {
    //     day = "Saturday!!!!!";
    // } else if (currentDay === 0) {
    //     day = "Sunday!!!!!";
    // }
    // switch (currentDay) {   // можно сделать через switch
    //     case 1:
    //         day = "Monday!!!!!";
    //     break;
    //     case 2:
    //         day = "Monday!!!!!";
    //     break;

    //     default:
    //         break;
    // }
    res.render("list", {listTitle: day, newListItems: items});
    // res.send("Hello!");
});

app.post("/", (req, res) => {
    let item = req.body.newItem;   // получаем значение введенное в input
    items.push(item);
    res.redirect("/");
    //console.log(item);
});

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", (req,res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});