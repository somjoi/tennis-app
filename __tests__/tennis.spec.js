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
});

class TennisApp {
  constructor() {
    this.scoreA = 0;
    this.scoreB = 0;
  }
  echo() {
    if (this.scoreA === 15) {
      return "Fifteen - LOVE";
    } else if (this.scoreA === 30) {
      return "Thirty - LOVE";
    } else {
      return "LOVE - LOVE";
    }
  }
  getScore(playerName) {
    this.scoreA += 15;
  }
}