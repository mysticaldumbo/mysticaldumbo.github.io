
/* 
EPILEPSY WARNING
script to change background color of a website very very fast
*/

(function() {
    'use strict';

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomColor();
    }

    changeBackgroundColor();

    setInterval(changeBackgroundColor, 1);
})();