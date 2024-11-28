export class UIUpdater {


    startQuizUi() {
        const quizPage = document.querySelector('.quiz-page');
        const startPage = document.querySelector('.start-page');

        startPage.classList.remove('active');
        quizPage.classList.add('active');
    }
    updateBirdList(categoryBird) {
        const birdList = document.querySelector('.bird-list');

        categoryBird.forEach((bird) => {
            const li = document.createElement('li');
            li.classList.add('bird-option');
            li.textContent = bird.name;
            li.dataset.bird = bird.name;

            birdList.appendChild(li);
        });
    }

    updateScore(score) {
        const Score = document.querySelector('#score');
        Score.textContent = score;
    }

    showBirdDetail(bird) {
        const birdDetail = document.querySelector('.bird-details');

        birdDetail.innerHTML = `
                    <img src="${bird.image}" alt="${bird.name}" />
            <h2 class="bird-name">${bird.name}</h2>
            <p class="bird-species">${bird.species}</p>
            <div class="audio-player">
                <button class="play-btn" data-audio="${bird.audio}" id="mysteryAudioButton" aria-label="Play">▶</button>
                <div class="progress-bar">
                    <div class="progress" id="mysteryProgress"></div>
                </div>
                <span class="time" id="mysteryTime">00:00 / 00:00</span>
            </div>
            <p class="bird-description">${bird.description}</p>

        `
    }
    showMystery(currentBird) {
        const mysteryBirdImg = document.querySelector('#mysteryBirdImage');
        const mysteryBirdName = document.querySelector('#mysteryBirdName');
        const mysteryBottom = document.querySelector('.mystery-bottom');
        const mysteryBirdAudio = document.querySelector('.audio-player');
        const species = document.createElement('p');

        mysteryBirdImg.src = currentBird.image;
        mysteryBirdName.innerHTML = currentBird.name;
        species.classList.add('mysteryBirdSpecies');
        species.innerHTML = currentBird.species;


        mysteryBirdName.insertAdjacentElement("afterend", species);
    }
}