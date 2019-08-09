// class TennisApp
// - getScore( playerName ) //A,B
// - echo() // return 0-0 "LOVE - LOVE", 15-0 "Fifteen - LOVE"

describe("TennisApp", () => {
  it('should return "LOVE - LOVE" when call echo() at game start', () => {
    const app = new TennisApp();

    let result = app.echo();

    expect(result).toBe("LOVE - LOVE");
  });

  it('should echo "Fifteen - LOVE" when playerA get first score', () => {
    const app = new TennisApp();
    app.getScore("A");

    let result = app.echo();

    expect(result).toBe("Fifteen - LOVE");
  });

  it('should echo "Thirty - LOVE" when playerA get double score', () => {
    const app = new TennisApp();
    app.getScore("A");
    app.getScore("A");

    let result = app.echo();

    expect(result).toBe("Thirty - LOVE");
  });

  it('should echo "Forty - LOVE" when playerA get triple score', () => {
    const app = new TennisApp();
    app.getScore("A");
    app.getScore("A");
    app.getScore("A");

    let result = app.echo();

    expect(result).toBe("Forty - LOVE");
  });

  it('should echo "PlayerA win the game" when playerA get win the game', () => {
    const app = new TennisApp();
    app.getScore("A");
    app.getScore("A");
    app.getScore("A");
    app.getScore("A");

    let result = app.echo();

    expect(result).toBe("PlayerA win the game");
  });

  it('should echo "Fifteen - LOVE" when playerB get first score', () => {
    const app = new TennisApp();
    app.getScore("B");

    let result = app.echo();

    expect(result).toBe("Fifteen - LOVE");
  });

  it('should echo "Thirty - LOVE" when playerB get double score', () => {
    const app = new TennisApp();
    app.getScore("B");
    app.getScore("B");

    let result = app.echo();

    expect(result).toBe("Thirty - LOVE");
  });

  it('should echo "Forty - LOVE" when playerB get triple score', () => {
    const app = new TennisApp();
    app.getScore("B");
    app.getScore("B");
    app.getScore("B");

    let result = app.echo();

    expect(result).toBe("Forty - LOVE");
  });

  it('should echo "PlayerB win the game" when playerB get win the game', () => {
    const app = new TennisApp();
    app.getScore("B");
    app.getScore("B");
    app.getScore("B");
    app.getScore("B");

    let result = app.echo();

    expect(result).toBe("PlayerB win the game");
  });
});

class TennisApp {
  constructor() {
    this.scoreA = 0;
    this.scoreB = 0;
  }
  echo() {
    if (this.scoreA === 15 || this.scoreB === 15) {
      return "Fifteen - LOVE";
    } else if (this.scoreA === 30 || this.scoreB === 30) {
      return "Thirty - LOVE";
    } else if (this.scoreA === 40 || this.scoreB === 40) {
      return "Forty - LOVE";
    } else if (this.scoreA === 50) {
      return "PlayerA win the game";
    } else if (this.scoreB === 50) {
      return "PlayerB win the game";
    } else {
      return "LOVE - LOVE";
    }
  }
  getScore(playerName) {
    if (playerName === 'A') {
      if (this.scoreA === 30) {
        this.scoreA += 10;
      } else if (this.scoreA === 40) {
        this.scoreA += 10;
      } else {
        this.scoreA += 15;
      }
    }
    if (playerName === 'B') {
      if (this.scoreB === 30) {
        this.scoreB += 10;
      } else if (this.scoreB === 40) {
        this.scoreB += 10;
      } else {
        this.scoreB += 15;
      }
    }


  }
}