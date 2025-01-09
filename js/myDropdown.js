/*點擊按鈕，下拉式選單在顯示/隱藏之間切換*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // 點選下拉選單意外區域隱藏
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }