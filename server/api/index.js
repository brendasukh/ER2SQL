const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/test', require('./test'));
router.use('/tables', require('./tables'))
router.use('/datatypes', require('./datatypes'))
router.use('/fields', require('./fields'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
