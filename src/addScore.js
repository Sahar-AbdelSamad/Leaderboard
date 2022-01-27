import { data } from './useAPI.js'
export class Leaderboard {
  constructor() {
    this.submit = document.querySelector('.submit');
    this.inputName = document.querySelector('.name');
    this.inputScore = document.querySelector('.score');
    this.listScores = document.querySelector('.list-scores');
    this.refresh = document.querySelector('.refresh');
  }

  addScore = () => {
    this.submit.addEventListener('click', () => {
      if (this.inputName.value && this.inputScore.value) {
        if (/^\d+$/.test(this.inputScore.value)) {
          data.postScoresToAPI(this.inputName.value, this.inputScore.value);
          this.inputName.value = '';
          this.inputScore.value = '';
        } else {
          this.showErrorMessage();
          setTimeout(this.removeErrorMessage, 2000);
        }
      } else {
        this.showValidationMessage();
        setTimeout(this.removeValidationMessage, 2000);
      }
    });
  }

  showRecentScores = (array) => {
    array.sort((a,b) => b.score - a.score);
    array.forEach((element) => {
      const li = document.createElement('li');
      li.className = ('list-item');
      li.innerText = `${element.user}: ${element.score}`;
      this.listScores.appendChild(li);
    });
  }

    showErrorMessage = () => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = ('Please enter a valid score');
      errorMessage.className = ('error-message');
      this.inputScore.parentNode.appendChild(errorMessage);
    }

    removeErrorMessage = () => {
      const errorMessage = document.querySelector('.error-message');
      this.inputScore.parentNode.removeChild(errorMessage);
    }

    showValidationMessage = () => {
      const message = document.createElement('p');
      message.textContent = ('Please fill all the boxes');
      message.className = ('message');
      this.inputScore.parentNode.appendChild(message);
    }

    removeValidationMessage = () => {
      const message = document.querySelector('.message');
      this.inputScore.parentNode.removeChild(message);
    }

    refreshList = () => {
      this.refresh.addEventListener('click', () => {
        window.location.reload();
      });
    }
}

export const newScore = new Leaderboard();
newScore.refreshList();