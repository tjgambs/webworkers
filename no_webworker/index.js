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
    const num = 40;
    const el = document.getElementById('result');
    el.innerHTML = '40th fibonacci';
    el.innerHTML = `40th fibonacci - ${NoWebworker.fibonacci(num)}`;
  }
}