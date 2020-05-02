const db = require('../models')

exports.getProduct = async(req, res, next) => {
    try {
        const result = await db.Product.findAll();
        res.json(result);
    } catch (error) {
        res.json({ message: error.message })
    }

}


exports.updateProduct = async(req, res, next) => {
    const { name, price, stock, image } = req.body;

    try {
        const result = await db.Product.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!result) {
            res.status(404).json({ message: 'ไม่มีข้อมูลนี้ในระบบ' })
        }

        updatePD(req, res, result)

    } catch (error) {
        res.json({ message: error.message })
    }

}

async function updatePD(req, res, result) {
    const { name, price, stock, image } = req.body;
    try {
        if (req.file) {
            var imageName = req.file.filename;
        }
        const data = {
            name: name,
            price: price,
            stock: stock,
            image: imageName
        }
        const [product] = await db.Product.update(data, {
            where: {
                id: result.id
            }
        })
        if (product) {
            const update = await db.Product.findByPk(result.id)
            res.status(201).json(update)
        } else {
            throw new Error('อัพเดตข้อมูลไม่สำเร็จ')
        }

    } catch (error) {

    }

}


exports.createProduct = async(req, res, next) => {
    const { name, price, stock, image } = req.body;

    try {
        if (req.file) {
            var imageName = req.file.filename;
        }
        const data = {
            name: name,
            price: price,
            stock: stock,
            image: imageName || 'no-image.png'
        }
        const product = await db.Product.create(data)
        if (product) {
            res.status(201).json({ message: "บันทึกข้อมูลเรียบร้อย" })
        }
    } catch (error) {

    }
}

exports.deleteProduct = async(req, res, next) => {
    try {
        const result = await db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: 'ลบข้อมูลสำเร็จ' })
    } catch (error) {

    }
}