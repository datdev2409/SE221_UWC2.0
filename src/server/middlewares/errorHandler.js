module.exports = (req, res, next, err) => {
  console.error(err)
  res.status(500).json({
    status: 'error',
    message: 'Something broke'
  })
}
