const router = require('express').Router();
const Sequelize = require('sequelize');
module.exports = router; 

router.get('/', (req, res ,next) => {
    let dataTypes = ['string', 'text', 'float', 'date', 'boolean', 'enum', 'array'];
    res.send(dataTypes);
});