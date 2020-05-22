class Webworker {
  /**
   * Will not block the UI thread
   */
  static calculate() {
    let worker = new Worker("./yes_webworker/worker.js");
    const el = document.getElementById('result');
    const num = 35 + Math.round(Math.random() * 10);
    worker.onmessage = event => {
      el.innerHTML = `${num} fibonacci - ${event.data}`;
    };
    el.innerHTML = `${num} fibonacci`;
    worker.postMessage(num);
  };
}