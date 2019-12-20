const brain = require("brain.js");
const fs = require("fs");
const data = require("./data.json");

const networkPath = "hardware-software-cached.network.json";

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

const network = new brain.recurrent.LSTM();
let networkData = null;
if (fs.existsSync(networkPath)) {
  networkData = JSON.parse(fs.readFileSync(networkPath));
  network.fromJSON(networkData);
} else {
  network.train(trainingData, {
    iterations: 2000
  });
  fs.writeFileSync(networkPath, JSON.stringify(network.toJSON(), null, 2));
}

// ================== INPUT DATA ====================

const inputString = "I am trying to focus on test driven development";
const inputString2 = "Search for a fast 1TB SSD";

// ==================================================

const output = network.run(inputString);

console.log(`Input String: ${inputString} \nCategory: ${output}`);
