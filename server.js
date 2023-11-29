const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter {}

const myEmitter = new Emitter();









// myEmitter.on("log", (msg) => logEvents(msg));

// setTimeout(() => {
//   // emit event

//   myEmitter.emit("log", "Log event emitted!");
// }, 20);
