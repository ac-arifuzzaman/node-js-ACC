module.exports.getAllTools = (req, res, next) => {
  res.send("paoa gese data from getAllTools controller");
};

module.exports.addATool = (req, res) => {
  res.send("abar add korlam tool from addATool controller");
};

module.exports.getToolDetails = (req, res, next) => {
  res.send("Tool details found from getToolDetails route");
};
