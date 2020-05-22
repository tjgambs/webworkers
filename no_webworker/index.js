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
    document.getElementById('nowebworker-result').innerHTML = `40th fibonacci - ${NoWebworker.fibonacci(num)}`;
  }

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