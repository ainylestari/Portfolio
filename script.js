function toggleSidebar(){
    event.preventDefault();
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');

};

document.addEventListener("DOMContentLoaded", function(){
    const animasi = document.querySelectorAll(".animasi");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        });
    animasi.forEach(el => observer.observe(el));
});

const accounts = document.querySelectorAll('.account');
const capt = document.querySelector('.capt');

accounts.forEach(account => {
    account.addEventListener('mouseover', () => {
        const username = account.getAttribute('uname');
        capt.textContent = username;
        capt.style.opacity = '1';
        capt.style.visibility = 'visible';
    });

    account.addEventListener('mouseout', () => {
        capt.style.opacity = '0';
        capt.style.visibility = 'hidden';
    });
});
