// 根據視窗寬度動態設定每頁顯示的圖片數量
function getItemsPerPage() {
    if (window.innerWidth >= 1024) {
        return 30; // 1024px 以上顯示 30 張
    } else if (window.innerWidth >= 768) {
        return 36 // 768px 以上顯示 24 張
    } else if (window.innerWidth >= 576) {
        return 32; // 576px 以上顯示 18 張
    } else {
        return 24;  // 576px 以下顯示 12 張
    }
}

const imageContainer = document.getElementById("imageContainer");
const pagination = document.getElementById("pagination");
const images = imageContainer.querySelectorAll(".color-box");

let currentPage = 1;

// 根據視窗寬度設置每頁顯示的圖片數量
function updatePagination() {
    const itemsPerPage = getItemsPerPage(); // 每頁顯示的圖片數量
    const totalPages = Math.ceil(images.length / itemsPerPage); // 計算總頁數

    function showPage(page) {
        currentPage = page;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;

        // 隱藏所有圖片
        images.forEach((image, index) => {
            if (index >= startIndex && index < endIndex) {
                image.style.display = "block";  // 顯示當前頁面的圖片
                image.classList.remove('hide');
                image.classList.add('show');
            } else {
                image.style.display = "none";  // 隱藏其他圖片
                image.classList.remove('show');
                image.classList.add('hide');
            }
        });

        // 更新分頁圓點的活動狀態
        const dots = pagination.querySelectorAll("span");
        dots.forEach((dot, index) => {
            if (index === page - 1) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // 清空目前的分頁
    pagination.innerHTML = "";

    // 創建圓點
    for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => showPage(i));
        pagination.appendChild(dot);
    }
    
    // 預設顯示第1頁
    showPage(1);
}


// 初始化分頁
updatePagination();

// 當視窗大小變更時，重新計算分頁
window.addEventListener('resize', updatePagination);
