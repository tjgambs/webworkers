class Webworker {
  /**
   * Will not block the UI thread
   */
  static calculate() {
    let worker = new Worker("./yes_webworker/worker.js");
    const el = document.getElementById('result');
    worker.onmessage = event => {
      const num = event.data;
      el.innerHTML = `40th fibonacci - ${num}`;
    };
    el.innerHTML = '40th fibonacci';
    const num = 40;
    worker.postMessage(num);
  };
}