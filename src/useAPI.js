import { newScore } from './addScore.js';
export class Data {
    constructor() {
        this.URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kPwgOmu44kog43JsIlkN/scores/';
    }

    fetchData = async () => {
        const response = await fetch(this.URL);
        const data = await response.json();
        newScore.showRecentScores(data.result);
      };

      postScoresToAPI = async (newName, newScore) => {
        await fetch(this.URL, {
          method: 'POST',
          body: JSON.stringify({
            user: newName,
            score: newScore
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      };
}
export const data = new Data();
