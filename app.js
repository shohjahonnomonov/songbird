import { QuizManager } from "./components/QuizManager.js";
import { EventHandler } from "./components/EventHandler.js";


const quizManager = new QuizManager();
const eventHandler = new EventHandler(quizManager);
eventHandler.init();