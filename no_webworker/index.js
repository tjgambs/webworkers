class NoWebworker {
  /**
   * Will block the UI thread
   */
  static fibonacci(num) {
    if (num <= 1) {
      return 1;
    }
    return NoWebworker.fibonacci(num - 1) + NoWebworker.fibonacci(num - 2);
  }
  static calculate() {
    const el = document.getElementById('result');
    const num = 35 + Math.round(Math.random() * 10);
    el.innerHTML = `${num} fibonacci`;
    el.innerHTML = `${num} fibonacci - ${NoWebworker.fibonacci(num)}`;
  }
}