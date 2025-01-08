document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider__inner');
    const slides = document.querySelectorAll('.slider__contents');
    let startX = 0;
    let endX = 0;
    let isTouching = false;
  
    // slider.style.width = `${slides.length * 100}%`;  // Set the width of the slider
  
    // 触摸开始
    slider.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;  // 获取触摸起始点
      isTouching = true;
    });
  
    // 触摸滑动
    slider.addEventListener('touchmove', function (e) {
      if (!isTouching) return;
  
      endX = e.touches[0].clientX;  // 获取当前滑动位置
      const deltaX = startX - endX;  // 计算滑动距离
  
      // 如果滑动超过一定距离，移动滑块
      if (Math.abs(deltaX) > 10) {
        slider.style.transform = `translateX(${Math.min(Math.max(-deltaX, -slider.offsetWidth), 0)}px)`;
      }
    });
  
    // 触摸结束
    slider.addEventListener('touchend', function () {
      if (!isTouching) return;
  
      // 根据滑动的方向来决定切换到哪个slide
      const direction = startX - endX;
      const slideWidth = slides[0].offsetWidth;
      
      if (Math.abs(direction) > slideWidth / 2) {
        if (direction > 0) {
          nextSlide();  // 向右滑动，切换到下一个
        } else {
          prevSlide();  // 向左滑动，切换到上一个
        }
      }
  
      isTouching = false;
      slider.style.transform = 'translateX(0)';  // 恢复到初始位置
    });
  
    function nextSlide() {
      const checkedRadio = document.querySelector('input[name="advantages"]:checked');
      const nextRadio = checkedRadio.nextElementSibling || document.querySelector('input[name="advantages"]:first-child');
      nextRadio.checked = true;
    }
  
    function prevSlide() {
      const checkedRadio = document.querySelector('input[name="advantages"]:checked');
      const prevRadio = checkedRadio.previousElementSibling || document.querySelector('input[name="advantages"]:last-child');
      prevRadio.checked = true;
    }
  });
  