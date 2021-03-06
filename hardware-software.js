const brain = require("brain.js");
const data = require("./data.json");

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 1000
});

// ================== INPUT DATA ====================

const inputString = "I am trying to focus on test driven development";
const inputString2 = "Search for a fast 1TB SSD";

// ==================================================

const output = network.run(inputString);

console.log(`Input String: ${inputString} \nCategory: ${output}`);
