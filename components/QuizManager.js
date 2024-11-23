import { birdsData } from "../../assets/db/data.js";
import { AudioPlayer } from "./AudioPlayer.js";
import { UIUpdater } from "./UIUpdater.js";

export class QuizManager {
    constructor() {
        this.audioPlayer = new AudioPlayer();
        this.uiUpdater = new UIUpdater();
        this.currentCategory = 0;
        this.currentBird = null;
    }

    startQuiz() {
        this.initQuestion();
        this.uiUpdater.startQuizUi();
    }

    initQuestion() {
        const categoryBird = birdsData[this.currentCategory];
        const randomNumber = Math.floor(Math.random() * categoryBird.length);
        this.currentBird = categoryBird[randomNumber];

        this.uiUpdater.updateBirdList(categoryBird);

        if (this.currentBird.audio) {
            this.audioPlayer.toggleAudio({ dataset: { audio: this.currentBird.audio } });
        }else {
            alert('Bunday qush ovozi yoq' )
        }

        console.log(this.currentBird);
    }
}