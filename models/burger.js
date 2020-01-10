
module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Burger;
}


// const BURGER_TABLE = "burger";

// function Burger(values) {
//     this.id = values.id;
//     this.burger_name = values.burger_name;
//     this.devoured = values.devoured;
// }

// function selectAll() {
//     return new Promise((resolve, reject) => {
//         orm.selectAll(BURGER_TABLE)
//             .then(result => {
//                 let arr = [];

//                 result.forEach(burger => {
//                     arr.push(new Burger(burger));
//                 });
//                 resolve(arr);
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// }

// function insertOne(values) {
//     return new Promise((resolve, reject) => {
//         orm.insertOne(BURGER_TABLE, values)
//             .then(result => {
//                 resolve(result);
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// }

// function updateOne(values, conditions) {
//     return new Promise((resolve, reject) => {
//         orm.updateOne(BURGER_TABLE, values, conditions)
//         .then(result => {
//             resolve(result);
//         })
//         .catch(err => {
//             reject(err)
//         });
//     });
// }

// module.exports = {
//     selectAll,
//     insertOne,
//     updateOne
// };
