let lastRenderTime = 0;
const SNAKE_SPEED = 2;

const main = (currentTime) => {

    window.requestAnimationFrame(main);

    const secondsSienceLastRender = (currentTime - lastRenderTime) / 1000;

    if(secondsSienceLastRender < 1 / SNAKE_SPEED) return;

    console.log('render');

    lastRenderTime = currentTime;


    
};

window.requestAnimationFrame(main);