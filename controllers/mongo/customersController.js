const customers = require("../../models/mongo/customers.js");

exports.insert = async (req, res, next) => {

    let data = new customers({
        c_fullname: req.body.name,
        c_tel: req.body.tel,
    });

    data.save();

    res.status(200).json({
        message: "เพิ่มข้อมูลลูกค้าเรียบร้อยแล้ว"
    });
}

exports.all = async (req, res, next) => {

    let data = await customers.find().sort({ _id: -1 });

    res.status(200).json(data);

}