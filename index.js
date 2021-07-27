let offSet = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');
const sliderLineWidth = sliderLine.clientWidth;
const imgCount = sliderLine.querySelectorAll('img').length;
const step = sliderLineWidth/imgCount;

const cb = () => {
  const sliderWidth = document.querySelector('.slider').clientWidth;
  return sliderLineWidth - sliderWidth;
}

document.querySelector('.button-l').addEventListener('click', function () {
  const maximumWidth = cb();
  offSet -= step;

  if (offSet < 0) {
    offSet = maximumWidth;
  }

  sliderLine.style.left = -offSet + 'px';
});

document.querySelector('.button-r').addEventListener('click', function () {
  const maximumWidth = cb();
  offSet += step;

  if (offSet > maximumWidth) {
    offSet = 0;
  }

  sliderLine.style.left = -offSet + 'px';
});
