"use strict"
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const compression = require('compression')

const ejs = require("ejs")

const PORT = 8555
const HOST = "0.0.0.0"

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(compression())
app.use(cors())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, "public")))

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css')))



app.get("/", function (req, res, next) {
  res.render("pages/index")
})

app.get("/interior", function (req, res, next) {
  res.render("pages/interior")
})

app.get("/exterior", function (req, res, next) {
  res.render("pages/exterior")
})

app.get("/painting", function (req, res, next) {
  res.render("pages/painting")
})

app.get("/commercial", function (req, res, next) {
  res.render("pages/commercial")
})

app.get("/contact", function (req, res, next) {
  res.render("pages/contact")
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
