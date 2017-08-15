const router = require('express').Router();
const Sequelize = require('sequelize');
const db = require('../db');
module.exports = router;

// req.body : array of objects
// each object represents one table
// ex/ [{tableName : 'table1', 
//          fields : {name : {type: String, validations: ...}, 
//                    quantity : {type : integer, validations: ...}}}, 
//      {tableName : 'table2', 
//          fields : {name : {type: String, validations: ...}, ...}]
router.post('/', (req, res, next) => {
    let tables = req.body; 
    for (var table of tables){
        let tableName = table.tableName;
        let fields = table.fields; 
        const createdTable = db.define(tableName, fields);
        db.sync();
    }
});

function getSequelizeType(type){
    let d = {'string': Sequelize.STRING, 'text': Sequelize.TEXT, 'float': Sequelze.FLOAT, 'date': Sequelize.DATE, 'boolean': Sequelze.BOOLEAN, 'enum': Sequelize.ENUM, 'array': Sequelize.ARRAY};
    return d[type];
}

function formatFields(fields){
    let keys = Object.keys(fields);
    for (var field of keys){
        let attribute = fields[field]; 
        let seqType = attribute['type']
        fields[field] = Object.assign({}, attribute, {type: getSequelizeType(seqType)})
    }
    return fields;
}