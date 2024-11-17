document.addEventListener('DOMContentLoaded', function () {

    const popupOverlay = document.getElementById('popupOverlay');

    const popup = document.getElementById('popup');

    const closePopup = document.getElementById('closePopup');

    const emailInput = document.getElementById('emailInput');

    const navbarToggler = document.querySelector('.navbar-toggler');

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    //To automatically hide the Hamburger Menu (collapsed navbar) when a link is clicked

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.textContent.trim() !== "Contact with me") {
                event.preventDefault(); // ปิดพฤติกรรมปกติของ anchor

                // ตรวจสอบว่า Navbar อยู่ในโหมด Hamburger หรือไม่
                if (window.getComputedStyle(navbarToggler).display !== 'none' &&
                    document.querySelector('.navbar-collapse').classList.contains('show')) {
                    navbarToggler.click(); // ปิดเมนู Hamburger
                }

                // ดึงค่า ID ของ Section ที่เราจะเลื่อนไป
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // คำนวณ offset ของ navbar
                    const navbarHeight = document.querySelector('.navbar').offsetHeight || 70; // กำหนด default 70px
                    const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

                    // เลื่อนหน้าอย่าง smooth
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                    });
                }
            }
        });
    });


    // Function to open the popup

    function openPopup() {

        popupOverlay.style.display = 'block';

    }

    // Function to close the popup

    function closePopupFunc() {

        popupOverlay.style.display = 'none';
        // Redirect to index.html
        window.location.href = 'index.html';

    }

    // Event listeners

    // Trigger the popup to open (you can call this function on a button click or any other event)

    openPopup();

    // Close the popup when the close button is clicked

    closePopup.addEventListener('click', closePopupFunc);

    // Close the popup when clicking outside the popup content

    popupOverlay.addEventListener('click', function (event) {

        if (event.target === popupOverlay) {

            closePopupFunc();

        }

    });

    // You can customize and expand these functions based on your specific requirements.

});