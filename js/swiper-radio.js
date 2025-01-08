// 偵測觸控事件
let startX = 0;
let endX = 0;
const slider = document.getElementById("slider");

// 當觸控開始時記錄起始位置
slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

// 當觸控結束時記錄結束位置並判斷滑動方向
slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    // 計算滑動距離
    const diff = startX - endX;

    // 判斷左右滑動方向
    if (Math.abs(diff) > 50) { // 如果滑動距離大於50px
        if (diff > 0) {
            // 向左滑動，選擇下一張圖片
            nextSlide();
        } else {
            // 向右滑動，選擇上一張圖片
            prevSlide();
        }
    }
});

// 切換到下一張圖片
function nextSlide() {
    const checkedRadio = document.querySelector('input[name="slider"]:checked');
    const nextRadio = checkedRadio.nextElementSibling;

    if (nextRadio && nextRadio.type === 'radio') {
        nextRadio.checked = true;
    } else {
        // 如果已經是最後一張，則回到第一張
        document.getElementById('s1').checked = true;
    }
}

// 切換到上一張圖片
function prevSlide() {
    const checkedRadio = document.querySelector('input[name="slider"]:checked');
    const prevRadio = checkedRadio.previousElementSibling;

    if (prevRadio && prevRadio.type === 'radio') {
        prevRadio.checked = true;
    } else {
        // 如果已經是第一張，則跳到最後一張
        document.getElementById('s5').checked = true;
    }
}
