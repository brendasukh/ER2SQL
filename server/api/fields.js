const router = require('express').Router();
const client = require('../db/client');
module.exports = router;

// Adding a column 
// req: {tableName: ..., newField: {name: color, type: Sequelize.STRING}}
router.post('/', (req, res, next) => {
  client.query('ALTER TABLE ($1) ADD COLUMN ($2) ($3)', [req.body.tableName, req.body.newField.name, req.body.newField.type], (err, res) => {
    if (err) {
      next(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Updating column name
// req: {tableName: ..., oldField: 'color', newField: 'shade'}
router.put('/', (req, res, next) => {
  client.query('ALTER TABLE ($1) RENAME COLUMN ($2) TO ($3)', [req.body.tableName, req.body.oldField, req.body.newField], (err, res) => {
    if (err){
      next(err);
    } else{
      res.sendStatus(200);
    }
  });
});