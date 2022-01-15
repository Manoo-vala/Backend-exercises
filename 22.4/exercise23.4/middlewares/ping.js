module.exports = function handlePing(req, res) {
  res.status(200).json({message: 'pong'});
};
