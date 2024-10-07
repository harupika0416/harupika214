document.cookie = "yuki=True; max-age=31536000; path=/"; // 自動承認
localStorage.setItem('followButton', 'true'); // ハルピカをフォローをおされたことを記録

window.onload = function() {
    const cookieAccepted = localStorage.getItem('followButton');
    if (cookieAccepted !== 'true') {
        showCookieNotice();
    }
