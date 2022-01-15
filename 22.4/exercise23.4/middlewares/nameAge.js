module.exports = function handleNameAge(req, res) {
  const { name, age } = req.params;

  return res.status(202).json({ message: `Seu nome é ${name} e você tem ${age} anos.` })
};
