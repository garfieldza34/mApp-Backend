const users = require("../../models/mongo/users.js")

exports.insert = async (req, res, next) => {
    let data = new users({
        email:"sigren8104@gmail.com",
        name: "Sigren",
        lastname:"Samuii"
    })
    data.save()
    res.status(200).json({
        message:"บันทึกข้อมูลเรียบร้อย"
    })
}