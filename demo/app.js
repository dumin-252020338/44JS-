const mongoose = require("mongoose")
const db = mongoose.createConnection("mongodb://localhost:27017/JavaScript123", { useNewUrlParser: true })
db.on("error", console.log.bind(console, "JavaScript123数据库连接失败"))
db.on("open", ()=> {
    console.log("JavaScript123数据库连接成功")
})

mongoose.Promise = global.Promise

const Schema = mongoose.Schema
const JSschema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: "男"
    },
    length: Number
})
const JS = db.model("javascript", JSschema, "appJs")
const data1 = {
    name: "tanzhou",
    age: 20,
    length: 18
}
const JSdata1 = new JS(data1)
JSdata1.save((err, res) => {
    console.log(err)
    console.log(res)
})