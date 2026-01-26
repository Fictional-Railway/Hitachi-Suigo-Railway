function toggleMenu() {
    const nav = document.getElementById('navBar');
    nav.classList.toggle('active');
}

function updateTime() {
    const now = new Date();
    const h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('timer').innerText = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + ' ' + h + ':' + m + ' 更新';
}
updateTime();
setInterval(updateTime, 30000);