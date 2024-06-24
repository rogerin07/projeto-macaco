const kong = document.querySelector('.kong');
const rock = document.querySelector('.rock');

const jump = () => {
    kong.classList.add('jump');
    
    setTimeout(() => {
        
        kong.classList.remove('jump');
        
    },500);

}

const loop = setInterval(() => {
    
    const rockPosition = rock.offsetLeft;
    const kongPosition = +window.getComputedStyle(kong).bottom.replace('px', '');

    
    if (rockPosition <= 120 && rockPosition > 0 && kongPosition < 120) {

        rock.style.animation = 'none'
        rock.style.left = `${rockPosition}px`;
        
        kong.style.animation = 'none'
        kong.style.bottom = `${kongPosition}px`;

        kong.src = './images/gameover.png';
        kong.style.width = '300px'
        kong.style.marginLeft = '-80px'

        clearInterval(loop);
    }




},10)

document.addEventListener('keydown',jump);
