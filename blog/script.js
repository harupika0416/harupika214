@@ -2,7 +2,7 @@ document.cookie = "yuki=True; max-age=31536000; path=/"; // 自動承認
localStorage.setItem('followButton', 'true'); // はるぴかをフォローをおされたことを記録

window.onload = function() {
    const cookieAccepted = localStorage.getItem('followButton');
    if (cookieAccepted !== 'true') {
    const followButton = localStorage.getItem('followButton');
    if (followButton !== 'true') {
        showCookieNotice();
    }