let count = 0;

const viewCount = (req, res, next) => {
  count++;
  console.log(count);
  // res.send("tool paoa gelo from middlewere");
  next();
};

module.exports = viewCount;
