const renderSquirrel = (x, y) => {
  const squirrel = new Image();
  squirrel.style.left = `${x}px`;
  squirrel.style.top = `${y}px`;
  squirrel.classList.add('squirrel');
  document.querySelector('body').appendChild(squirrel);
  setTimeout(() => {
    document.querySelector('body').removeChild(squirrel);
  }, 500);
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('#container');
  Rx.Observable
    .fromEvent(container, 'mousemove')
    .map(event => ({ x: event.clientX, y: event.clientY }))
    .distinctUntilChanged()
    .subscribe((coords) => {
      renderSquirrel(coords.x, coords.y);
    });
});
