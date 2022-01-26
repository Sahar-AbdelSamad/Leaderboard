class Leaderboard {
    constructor() {
      this.scores = JSON.parse(localStorage.getItem('list') || '[]');
      this.submit = document.querySelector('.submit');
      this.inputName = document.querySelector('.name');
      this.inputScore = document.querySelector('.score');
      this.listScores = document.querySelector('.list-scores');
      this.refresh = document.querySelector('.refresh');
    }
    
    addScore = () => {
      this.submit.addEventListener('click', () => {
        if(this.inputName.value && this.inputScore.value) {
          if(/^\d+$/.test(this.inputScore.value)) {
              const scoreAdded = {
              name: this.inputName.value,
              score: this.inputScore.value
            }
            this.scores.push(scoreAdded)
            newScore.toLocalStorage(this.scores);
            this.inputName.value = "";
            this.inputScore.value = "";
          } else {
            newScore.showErrorMessage();
            setTimeout (newScore.removeErrorMessage,2000);
          }
        } else {
          newScore.showValidationMessage();
          setTimeout (newScore.removeValidationMessage,2000);
        }
      }) 
    }
  
    toLocalStorage = (array) => {
      localStorage.setItem('list', JSON.stringify(array));
      newScore.refreshList();
    }
  
    showRecentScores = () => {
        this.scores.forEach(element => {
        const li = document.createElement('li');
        li.className = ('list-item');
        li.innerText = `${element.name}: ${element.score}`;
        this.listScores.appendChild(li);
      });
    }
  
    showErrorMessage = () => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = ("Please enter a valid score");
      errorMessage.className = ('error-message');
      this.inputScore.parentNode.appendChild(errorMessage)
    }
  
    removeErrorMessage = () => {
      const errorMessage = document.querySelector('.error-message');
      this.inputScore.parentNode.removeChild(errorMessage);
    }
  
    showValidationMessage = () => {
      const message = document.createElement('p');
      message.textContent = ("Please fill all the boxes");
      message.className = ('message');
      this.inputScore.parentNode.appendChild(message)
    }
  
    removeValidationMessage = () => {
      const message = document.querySelector('.message');
      this.inputScore.parentNode.removeChild(message);
    }

    refreshList = () => {
      this.refresh.addEventListener('click', () => {
        window.location.reload();
      })
    }
  }
  
  export const newScore = new Leaderboard();
  newScore.addScore();
  newScore.refreshList();