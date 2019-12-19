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

const inputString = "I love when you refactor my code, said nobody ever";
const inputString2 = "I need a new graphics card";

// ==================================================

const output = network.run(inputString);

console.log(`Input String: ${inputString} \nCategory: ${output}`);
