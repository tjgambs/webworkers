class Webworker {
  /**
   * Will not block the UI thread
   */

  static calculate() {
    let worker = new Worker("./yes_webworker/worker.js");
    worker.onmessage = event => {
      const num = event.data;
      document.getElementById('webworker-result').innerHTML = `40th fibonacci - ${num}`;
    };
    const num = 40;
    worker.postMessage(num);
  };

  static move() {
    for (let i = 0; i < 3; i++) {
      const shuttleID = `shuttle${i + 1}`;
      let shuttle = document.getElementById(shuttleID);

      let position = 0;
      setInterval(() => {
        if (position > window.innerWidth / 1.2) {
          position = 0;
        } else {
          position++;
          shuttle.style.left = position + "px";
        }
      }, 5);
    }
  };
}