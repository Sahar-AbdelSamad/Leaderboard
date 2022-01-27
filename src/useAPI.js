export class Data {
  constructor() {
    this.URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kPwgOmu44kog43JsIlkN/scores/';
    this.listScores = document.querySelector('.list-scores');
  }

    fetchData = async () => {
      const response = await fetch(this.URL);
      const data = await response.json();
      this.showRecentScores(data.result);
    };

    postScoresToAPI = async (newName, newScore) => {
      await fetch(this.URL, {
        method: 'POST',
        body: JSON.stringify({
          user: newName,
          score: newScore,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    };

    showRecentScores = (array) => {
      array.sort((a, b) => b.score - a.score);
      array.forEach((element) => {
        const li = document.createElement('li');
        li.className = ('list-item');
        li.innerText = `${element.user}: ${element.score}`;
        this.listScores.appendChild(li);
      });
    }
}
export const data = new Data();
