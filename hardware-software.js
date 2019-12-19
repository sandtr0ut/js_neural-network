const brain = require("brain.js");
const data = require("./data.json");

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 2000
});

// const output = network.run("The code has some bugs");  //Category: software

const output = network.run("I need a new graphics card");

console.log(`Category: ${output}`);
