const router = require('express').Router();
const { Database } = require('../db')

router.post('/:userID/:dbName', (req, res, next) => {
  Database.findOrCreate( {where: {
    userId: req.body.userId,
    name: req.body.dbName
  }})
  .spread( (db, created) => {
    if (!created){
      res.send("Database ", req.body.dbName, " already exists ");
    }
    else {
      console.log(db);
      res.send(db);
    }
  })
  .catch(next);
});

module.exports = router;
