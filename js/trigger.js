const triggers = document.getElementsByClassName('box');  // trigger
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('modal');
const closeButtons = document.getElementsByClassName('b-close');
const body = document.body; // ((操控)) 開啟彈窗後，body無法滾動


for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    // 切換顯示模態框
    modals[index].classList.toggle('show-modal');

    // ((操控)) 開啟彈窗後，body無法滾動
    if (modals[index].classList.contains('show-modal')) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }


  // 觸發顯示或隱藏模態框的事件
  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);


  // 點擊模態框本身時關閉模態框
  modals[index].addEventListener("click", (event) => {
    // 確保點擊的是模態框的外部區域（而不是內部的內容）
    if (event.target === modals[index]) {
      toggleModal();
    }
  });

  
}