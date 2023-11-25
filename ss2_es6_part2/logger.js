function logger(message, type = "log") {
  console[type](message);
}

function logger2(message, type = "log") {
  console[type](message);
}

function logger3(message, type = "log") {
  console[type](message);
}
export { logger2, logger3 };
export default logger;
