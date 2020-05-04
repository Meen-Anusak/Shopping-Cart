'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        data.map(item => {
            item.created_at = new Date();
            item.updated_at = new Date();
        })

        return queryInterface.bulkInsert('Products', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }

};

const data = [{
        "name": "MacbookPro",
        "image": "macbookPro.jpeg",
        "stock": 13,
        "price": 42000
    },
    {
        "name": "MacbookAir",
        "image": "macbookAir.jpeg",
        "stock": 10,
        "price": 29000
    },
    {
        "name": "iphoneSE2020",
        "image": "iphoneSE2020.jpeg",
        "stock": 8,
        "price": 19000
    },
    {
        "name": "iphone11-Max",
        "image": "iphone11-max.jpeg",
        "stock": 10,
        "price": 185
    },
    {
        "name": "I-mac",
        "image": "Imac.jpeg",
        "stock": 10,
        "price": 55000
    },
    {
        "name": "Applewatch",
        "image": "applewatch.jpeg",
        "stock": 7,
        "price": 10000
    },
    {
        "name": "Iphone7",
        "image": "iphone7.jpg",
        "stock": 25,
        "price": 14000
    },
    {
        "name": "Iphone8",
        "image": "iphone8.png",
        "stock": 30,
        "price": 22000
    },
    {
        "name": "Beats Studio3",
        "image": "beats3.jpg",
        "stock": 10,
        "price": 10000
    },
    {
        "name": "Beats Solo3",
        "image": "beatssolo3.jpeg",
        "stock": 1000,
        "price": 7000
    },

]