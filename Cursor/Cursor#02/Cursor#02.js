document.addEventListener('mousemove', function (e) {
    const trail = document.createElement('span');
    trail.classList.add('trail');
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';

    // Random color
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    trail.style.backgroundColor = color;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});
