
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const items = ["Buy Food", "Cook Food"];
const workItems = [];
const date = require(__dirname + "/date.js");

app.set('view engine', 'ejs');                      // подключение модуля
app.use(bodyParser.urlencoded({extended: true}));   // подключение модуля
app.use(express.static("public"));                  // подключение модуля

// основная страница
app.get("/", (req, res) => {
    // let today = new Date();
    // let options = {
    //     weekday: "long",
    //     year: 'numeric',
    //     day: "numeric",
    //     month: "numeric"
    // };
    // let day = today.toLocaleDateString("en-GB", options);
    // строки выше перенесены в файл getDate

    let day = date.getDate();
    //console.log(day);
    // передаем переменную listTitle со значением day
    res.render("list", {listTitle: day, newListItems: items});
    // отрисовывает страницу с именем index, и это будет страница index.ejs.
    // передаваемый файл должен находится в папке views
});

app.post("/", function(req, res) {
    let item = req.body.newItem;   // получаем значение введенное в input
    
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

// вторая страница
app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", (req, res) => {
    res.render("about");
});

// app.post("/work", (req,res) => {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});