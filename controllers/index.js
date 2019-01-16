const getIndex = (req, res) => {
  res.render('index', {
    path: '/',
  });
}

module.exports = {
  getIndex: getIndex,
}
