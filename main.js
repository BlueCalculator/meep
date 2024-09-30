$(document).ready(function() {


    var currentDate = new Date();

    //POPULATE SIDEBAR
    function fetchData(callback) {
        $.getJSON(`https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/games.json?v=${currentDate.getTime()}`, function(data) {
            callback(data);
        });
    }

    function populateSidebar(data) {
        const sidebar = $('#sidebar');

        $.each(data, function(index, item) {
            const sidebarItem = $(`<div class="game" id="${item.title}"></div>`).text(item.title).addClass('sidebar-item');

            sidebarItem.click(function() {
                displayContent(item);
                updateURLHash(item.title);
            });

            sidebar.append(sidebarItem);
        });

        var currentHash = location.hash
        var CleanHash = currentHash.replace(/-/g, " ")
        hash = CleanHash.slice(1, -7)
        if (hash) {
            const selectedItem = data.find(item => item.title === hash);
            if (selectedItem) {
                displayContent(selectedItem);
            }
        }
    }

    function displayContent(item) {
        setTimeout(1, updateStyle(item))
        updateGameContainer(item);
    }

    function updateStyle(item){
        document.title = "meep | " + item.title;
        $(".game").removeClass("active")
        console.log(item.title)
        var ItemTitle = document.getElementById(item.title)
        $(ItemTitle).addClass("active")
    }

    //RENAME #
    function updateURLHash(title) {
        cleanTitle = title.replace(/[# % 20]/g, "-")
        window.location.hash = cleanTitle + "---0uch";
    }
    //GAME SELECTOR

    function updateGameContainer(item) {
        if (item.sys === 1) {
            updateGBAGame(item.gam);
        } else if (item.sys === 2) {
            updateFlashGame(item.gam);
        }
    }

    function updateGBAGame(gameUrl) {
        $("div.container").empty();
        $("div.container").append(`<div id='emugame'></div><script src="https://cdn.jsdelivr.net/gh/JollyBannana/asdf@main/data/loader.js"></script>`);
        EJS_player = '#emugame';
        EJS_biosUrl = 'https://cdn.glitch.global/e80ed295-94d7-4282-84eb-cd197622b753/gba_bios.bin?v=1641942995895';
        EJS_gameUrl = gameUrl;
        EJS_core = 'gba';
        EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/JollyBannana/asdf@main/data/';
    }

    function updateFlashGame(gameUrl) {
        $( "div.container" ).empty();
        $( "div.container" ).append("<div id='flashcontainer'></div>")
    window.RufflePlayer = window.RufflePlayer || {};
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("flashcontainer");
    container.appendChild(player);
    player.load(gameUrl);
    player.style.width = "100%"; 
    player.style.height = "100vh";
    window.RufflePlayer.config = {
    "publicPath": undefined,
    "polyfills": true,
    "autoplay": "on",
    "unmuteOverlay": "hidden",
    "backgroundColor": null,
    "wmode": "window",
    "letterbox": "fullscreen",
    "warnOnUnsupportedContent": false,
    "contextMenu": true,
    "showSwfDownload": treu,
    "upgradeToHttps": window.location.protocol === "https:",
    "maxExecutionDuration": {"secs": 15, "nanos": 0},
    "logLevel": "error",
    "base": null,
    "menu": true,
    "salign": "",
    "scale": "showAll",
    "forceScale": false,
    "quality": "high",
    "splashScreen": false,
    }}


    //START
    fetchData(populateSidebar);
});
