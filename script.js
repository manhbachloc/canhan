// Bật/tắt sidebar trên màn hình nhỏ
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isVisible = sidebar.style.left === '0px';

    // Cập nhật vị trí sidebar
    sidebar.style.left = isVisible ? '-250px' : '0px';

    // Thay đổi biểu tượng nút nếu cần
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    sidebarToggleBtn.innerText = isVisible ? 'Open Menu' : 'Close Menu';
}

// Đóng sidebar khi nhấp vào bất kỳ phần tử nào ngoài sidebar
function closeSidebar(event) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px' && !sidebar.contains(event.target)) {
        sidebar.style.left = '-250px';
        const sidebarToggleBtn = document.getElementById('sidebar-toggle');
        sidebarToggleBtn.innerText = 'Open Menu';
    }
}

// Thêm event listener cho nút sidebar toggle
const sidebarToggleBtn = document.getElementById('sidebar-toggle');
sidebarToggleBtn.addEventListener('click', toggleSidebar);

// Thêm event listener để đóng sidebar khi nhấp ra ngoài
document.addEventListener('click', closeSidebar);

// Cuộn mượt đến phần nội dung khi nhấp vào liên kết menu
const menuLinks = document.querySelectorAll('header nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Lấy ID từ href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
