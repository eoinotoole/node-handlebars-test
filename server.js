const path = require("path")
const express = require("express")
const hbs = require("express-handlebars")

const app = express()

app.use(express.static(path.join(__dirname, "/public")))
app.engine("hbs", hbs({ extname: "hbs", defaultLayout: "layout", layoutsDir: __dirname + '/views' }))
app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("index", { title: "Home | " })
})

app.listen(3000, () => console.log("app listening on port 3000"))