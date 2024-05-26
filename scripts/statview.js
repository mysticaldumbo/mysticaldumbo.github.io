function showStats() {
    let username = document.getElementById('username').value;
    if (username) {
        let statsDiv = document.getElementById('stats');
        let generalStatsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&theme=tokyonight&show_icons=true&hide_border=true&count_private=true`;
        let langStatsUrl = `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&theme=tokyonight&layout=compact&hide_boder=true`;
        let streakStatsUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true`;

        statsDiv.innerHTML = `
            <img src="${generalStatsUrl}" alt="github stats for ${username}">
            <img src="${langStatsUrl}" alt="top languages for ${username}">
            <img src="${streakStatsUrl}" alt="github streak stats for ${username}">
        `;
    } else {
        alert('please enter a github username.');
    }
}