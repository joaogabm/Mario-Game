const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 90){

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = '../imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(this.loop);

        clearInterval(loop);
    }

    const startTimer = () => {
        this.loop = setInterval (() => {

            const currentTime = +timer.innerHTML;
            timer.innerHTML = currentTime + 1;
    
        }, 1000)
    }
    

    window.onload = () => {
        spanPlayer.innerHTML = localStorage.getItem('player');
        startTimer();
        loop();
    }


}, 10);

document.addEventListener('keydown', jump);