import { birdsData } from "../assets/db/data.js";
import { AudioPlayer } from "./AudioPlayer.js";
import { UIUpdater } from "./UIUpdater.js";

export class QuizManager {
    constructor() {
        this.audioPlayer = new AudioPlayer();
        this.uiUpdater = new UIUpdater();
        this.currentCategory = 0;
        this.currentBird = null;
        this.givenCorrectAnswer = false;
        this.score = 0;
        this.attempts = 0;
    }


    startQuiz() {
        this.initQuestion();
        this.uiUpdater.startQuizUi();
    }

    initQuestion() {
        const audioButton = document.querySelector('.play-button');
        const categoryBird = birdsData[this.currentCategory];
        const randomNumber = Math.floor(Math.random() * categoryBird.length);
        this.currentBird = categoryBird[randomNumber];

        audioButton.dataset.audio = this.currentBird.audio;

        this.uiUpdater.updateBirdList(categoryBird);
        console.log(this.currentBird);

    }

    handleBirdSelection(element) {

        if (this.givenCorrectAnswer) return;

        const choosen = birdsData[this.currentCategory].filter((bird) => bird.name === element.dataset.bird);

        this.uiUpdater.showBirdDetail(choosen[0]);


        if (element.dataset.bird === this.currentBird.name) {
            this.score = this.score + 5 - this.attempts;
            this.uiUpdater.updateScore(this.score);
            this.givenCorrectAnswer = true;
            element.classList.add('correct');
            this.correctSoundFn();
            this.uiUpdater.showMystery(this.currentBird);
        } else {
            this.attempts++;
            element.classList.add('incorrect');
            this.inCorrectSoundFn();
        }


    }

    correctSoundFn() {
        const correctSound = new Audio('../../songbird/assets/sounds/correct-156911.mp3');
        correctSound.play();
    }
    inCorrectSoundFn() {
        const incorrectSound = new Audio('../../songbird/assets/sounds/wrong-47985.mp3');
        incorrectSound.play();
    }

}   