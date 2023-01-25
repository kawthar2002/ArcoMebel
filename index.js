window.addEventListener('resize', () => {
  let position = 0;
  let slidesToShow = 4;
  const slidesToScroll = 1;
  const slidesContainer = document.querySelector('.slider-inner__container');
  const slidesTrack = document.querySelector('.slider-inner__items');
  const slides = document.querySelectorAll('.slider-inner__item');
  const slidesCount = slides.length;
  const slidesWidth = slidesContainer.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * slidesWidth;
  const btnRight = document.querySelector('.right');
  const btnLeft = document.querySelector('.left');
  slides.forEach((slide) => {
    slide.style.minWidth = `${slidesWidth}px`;
  });
  btnRight.addEventListener('click', () => {
    const slidesLeft =
      slidesCount -
      (Math.abs(position) + slidesToShow * slidesWidth) / slidesWidth;
    position -=
      slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slidesWidth;

    setPosition();
    checkBtns();
  });
  btnLeft.addEventListener('click', () => {
    const slidesLeft = Math.abs(position) / slidesWidth;
    position +=
      slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slidesWidth;
    setPosition();
    checkBtns();
  });
  const setPosition = () => {
    slidesTrack.style.transform = `translateX(${position}px)`;
  };
  const checkBtns = () => {
    btnLeft.disabled = position === 0;
    btnRight.disabled = position <= -(slidesCount - slidesToShow) * slidesWidth;
  };
  checkBtns();
});
