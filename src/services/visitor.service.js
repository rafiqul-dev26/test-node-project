const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "../data/stats.json");

const getVisitorCount = () => {
  try {
    if (!fs.existsSync(dataFile)) {
      fs.writeFileSync(dataFile, JSON.stringify({ visitorCount: 0 }, null, 2), "utf8");
      return 0;
    }
    const data = fs.readFileSync(dataFile, "utf8");
    const parsed = JSON.parse(data);
    return parsed.visitorCount || 0;
  } catch (error) {
    return 0;
  }
};

const incrementVisitorCount = () => {
  let count = getVisitorCount();
  count += 1;
  fs.writeFileSync(dataFile, JSON.stringify({ visitorCount: count }, null, 2), "utf8");
  return count;
};

module.exports = {
  getVisitorCount,
  incrementVisitorCount
};
