import './style.css';
import { newScore } from './addScore.js';
import { data } from './useAPI.js';

window.onload = () => {
  data.fetchData();
  newScore.addScore();
};