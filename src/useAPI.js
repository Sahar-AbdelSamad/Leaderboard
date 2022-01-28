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
          'Content-type': 'application/json',
        },
      });
    };

    showRecentScores = (array) => {
      array.sort((a, b) => b.score - a.score);
      array.forEach((element) => {
        const li = document.createElement('li');
        li.className = ('list-item');
        const p1 = document.createElement('p');
        p1.innerText = `${element.user}`;
        p1.className = ('user');
        li.appendChild(p1);
        const p2 = document.createElement('p');
        p2.innerText = `${element.score}`;
        p2.className = ('scores');
        li.appendChild(p2);
        this.listScores.appendChild(li);
      });
    }
}
export const data = new Data();
