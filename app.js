import { AudioPlayer } from "./src/components/AudioPlayer.js";
import { EventHandler } from "./src/components/EventHandler.js";
import { QuizManager } from "./src/components/QuizManager.js";
import { UIUpdater } from "./src/components/UIUpdater.js";

const audioPlayer = new AudioPlayer();
const uiupDater = new UIUpdater();
const quizManager = new QuizManager();
const eventHandler = new EventHandler(quizManager);
eventHandler.init();