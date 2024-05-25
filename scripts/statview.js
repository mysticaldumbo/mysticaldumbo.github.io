function showStats() {
    const username = document.getElementById('username').value;
    if (username) {
        const statsDiv = document.getElementById('stats');
        const imgUrl = `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&theme=tokyonight&layout=compact`;
        statsDiv.innerHTML = `<img src="${imgUrl}" alt="GitHub Stats for ${username}">`;
        document.getElementById('copyLink').setAttribute('data-url', imgUrl);
    } else {
        alert('please enter a github username');
    }
}