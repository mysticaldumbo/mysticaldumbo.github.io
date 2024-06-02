document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let input = document.getElementById("searchInput").value.trim();

    if (isDomain(input)) {
        window.open("https://" + input, "_blank");
    } else {
        window.open("https://www.bing.com/search?q=" + encodeURIComponent(input), "_blank");
    }
});

function isDomain(input) {
    // i know this line seems confusing but stick with me bruh 😭
    let domainPattern = /^(http:\/\/|https:\/\/)?(www\.)?([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/;
    return domainPattern.test(input);
}