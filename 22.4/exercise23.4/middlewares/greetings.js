module.exports = function handleGreetings(req, res) {
  const { name, age } = req.body;
  if(age <= 17) return res.status(201).json({ message: "Unauthorized" });

  return res.status(201).json({ message: `Hello, ${name}` });
};
