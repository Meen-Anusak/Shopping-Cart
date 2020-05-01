'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.INTEGER,
        stock: DataTypes.INTEGER
    }, {
        feezeTableName: true,
        underscoredAll: true,
        underscored: true,
        createAt: "created_at",
        updateAt: "updated_at",
    });
    Product.associate = function(models) {
        // associations can be defined here
    };
    return Product;
};