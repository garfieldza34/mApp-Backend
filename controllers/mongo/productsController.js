const products = require("../../models/mongo/products.js");

exports.insert = async (req, res, next) => {

    // console.log(req.body.product_id);
    // console.log(req.body.product_name);
    // console.log(+req.body.product_price);

    let data = new products({
        product_id: req.body.product_id,
        product_name: req.body.product_name,
        product_price: +req.body.product_price
    });

    data.save();

    res.status(200).json({
        message: "เพิ่มข้อมูลสินค้าเรียบร้อยแล้ว"
    });
}

exports.all = async (req, res, next) => {

    let data = await products.find().sort({ _id: -1 });

    res.status(200).json(data);

}

exports.delete = async (req, res, next) => {
    let data = await products.findOneAndDelete({ _id: req.params.id });

    res.status(200).json(data);
}