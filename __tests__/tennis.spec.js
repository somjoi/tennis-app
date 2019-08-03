// class TennisApp
// - getScore( playerName ) //A,B
// - echo() // return 0-0 "LOVE - LOVE", 15-0 "Fifteen - LOVE"

describe("TennisApp", () => {
  it('should return "LOVE - LOVE" when call echo() at game start', () => {
    const app = new TennisApp();

    let result = app.echo();

    expect(result).toBe("LOVE - LOVE");
  });
});

class TennisApp {
  constructor() {}
  echo() {
    return "LOVE - LOVE";
  }
  getScore(playerName) {}
}
