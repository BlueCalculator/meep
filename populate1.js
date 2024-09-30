$(document).ready(function() {

    const main = `
        <div class="main">
            <div class="gcontent">
                <div class="container" id="content">
                    <!-- <a class="titleScreen">BY 0UCH</a> -->
                </div>
            </div>
            <div class="sidebar" id="sidebarOJ">
            <div class="title">
                <h2 class="TAG">MEEP</h2>
                <p class="subinfo">select a game</p>
            </div>
            <div class="g" id="sidebar">
                <!-- <h3>GBA</h3>
                fix
                <h3>FLASH GAMES</h3>
                 -->
            </div>
            </div>
        </div>
        <div class="cdns"><!-- A mess where CDNS go --></div>
    `;

    // Append the main content once
    $('body').append(main);

    // Add the CDN script dynamically (not in the HTML string)
    var currentDate = new Date();
    const cdnsSet = $('<script src="' + "https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/setCDNs.js" + "?v=" + currentDate.getTime() + '"></script>');
    $('.cdns').append(cdnsSet);

    // Function to update the content dynamically
    function tag() {
        document.getElementById("content").innerHTML = `
        <div class="info">
            <h1>INFO</h1>
            <p>Use "{" to change Heading to Google Classroom</p>
            <p>Use "}" to take you directly to Google Classroom</p>
            <br>
            <a class="titleScreen">BY 0̸u̶c̶h̴</a>
        </div>
        `;
    }

    // Initialize the content
    tag();

    // Generate random "Created By" message
    var CreatedBy = [
        "cooked up by ", 
        "Handcrafted by caffeine-fueled wizard ", 
        "Coded by your friendly neighborhood programmer ", 
        "Spawned By ", 
        "Developed by ", 
        "Brought to life by ", 
        "Assembled with duct tape by "
    ];
    const randomCreatedBy = CreatedBy[Math.floor(Math.random() * CreatedBy.length)];
    document.getElementById("sidebarOJ").insertAdjacentHTML('beforeend', `<a id="footer">${randomCreatedBy} 0uch<a>`);

    // Set up click event listeners
    $('.TAG').on('click', function() {
        tag();
    });

    $('.subinfo').on('click', function() {
        document.getElementById("content").innerHTML = `
        <img src="https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-45.jpg?fit=700%2C465">
        `;
    });

});
