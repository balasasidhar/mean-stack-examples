// 1000ms --> 1s
// 10s --> 1000ms * 10

/** Executes only once */
setTimeout(timeoutHandler, 1000 * 10);

function timeoutHandler() {
  console.log("You've logged out of time.");
}

/** Execute for every 1 second */
var intervalTimer = setInterval(intervalHandler, 1000);

function intervalHandler() {
  console.log(new Date().toLocaleString());
}

setTimeout(() => {
  clearInterval(intervalTimer);
}, 1000 * 15);
