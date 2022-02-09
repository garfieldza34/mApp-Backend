const users = require("../../models/mongo/users.js");

exports.insert = async (req, res, next) => {
    let data = new users({
        email: "garfieldza34@gmail.com",
        name: "จักรกฤษ",
        lastname: "สุขาจารย์"
    });

    data.save();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });
}