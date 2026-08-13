const out = document.getElementById("out");
const runTrafficBtn = document.getElementById("run-traffic");
const runTrafficBrokenBtn = document.getElementById("run-traffic-broken");
const runAllBtn = document.getElementById("run-all");

function log(...args) {
  const text = args.join(" ");
  out.textContent += text + "\n";
  console.log(text);
}

const delay = (ms, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === "broken") {
        reject(new Error("received broken"));
      } else {
        resolve(value);
      }
    }, ms);
  });

function trafficLight() {
  out.textContent = "";
  log("Traffic start");

  delay(0, "red")
    .then((v) => {
      log(v);
      return delay(2000, "green");
    })
    .then((v) => {
      log(v);
      return delay(1000, "yellow");
    })
    .then((v) => {
      log(v);
      log("Traffic done");
    })
    .catch((err) => {
      log("Error:", err.message);
    });
}

function trafficLightMaybeBroken() {
  out.textContent = "";
  log("Traffic (maybe broken) start");

  delay(0, "red")
    .then((v) => {
      log(v);
      return delay(2000, "broken"); 
    })
    .then((v) => {
      log(v);
      return delay(1000, "yellow");
    })
    .then((v) => {
      log(v);
      log("Traffic done");
    })
    .catch((err) => {
      log("Caught error in chain:", err.message);
    });
}

function allDemo() {
  out.textContent = "";
  log("Promise.all demo start");

  const p1 = delay(1000, "one");
  const p2 = delay(500, "two");
  const p3 = delay(1500, "three");

  Promise.all([p1, p2, p3])
    .then((results) => {
      log("All results:", results.join(", "));
    })
    .catch((err) => {
      log("Promise.all error:", err.message);
    });
}

runTrafficBtn.addEventListener("click", trafficLight);
runTrafficBrokenBtn.addEventListener("click", trafficLightMaybeBroken);
runAllBtn.addEventListener("click", allDemo);

