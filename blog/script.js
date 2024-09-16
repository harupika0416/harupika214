document.cookie = "yuki=True; max-age=31536000; path=/"; // 自動承認
localStorage.setItem('cookieAccepted', 'true'); // cookieが承認されたことを記録

window.onload = function() {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (cookieAccepted !== 'true') {
        showCookieNotice();
    }
};

// ただし、cookieが承認された時に表示しないようにします。
function showCookieNotice() {
    const cookieNotice = document.getElementById('cookie-notice');
    cookieNotice.style.opacity = '1';
    cookieNotice.style.transform = 'translateY(0)';
}

function hideCookieNotice() {
    const cookieNotice = document.getElementById('cookie-notice');
    cookieNotice.style.opacity = '0';
    cookieNotice.style.transform = 'translateY(20px)';
    setTimeout(() => {
        cookieNotice.style.display = 'none';
    }, 500);
}
