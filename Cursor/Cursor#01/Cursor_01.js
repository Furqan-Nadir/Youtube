document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('span');
    trail.classList.add('trail');
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    setTimeout(() => {
        trail.remove();
    }, 600);
});
