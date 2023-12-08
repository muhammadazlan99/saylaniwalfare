const player = document.getElementById('player');
const bullet = document.querySelector('.bullet');

let isShooting = false;

document.addEventListener('keydown', (event) => {
    if (event.key === ' ' && !isShooting) {
        shoot();
    }
});

function shoot() {
    isShooting = true;
    bullet.style.left = `${parseInt(player.style.left) + player.offsetWidth / 2}px`;
    bullet.style.bottom = `${parseInt(player.style.bottom) + player.offsetHeight}px`;
    bullet.style.display = 'block';

    const bulletMoveInterval = setInterval(() => {
        const bulletBottom = parseInt(bullet.style.bottom);
        bullet.style.bottom = `${bulletBottom + 10}px`;

        if (bulletBottom >= 600) {
            clearInterval(bulletMoveInterval);
            bullet.style.display = 'none';
            isShooting = false;
        }
    }, 50);
}

