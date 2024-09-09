addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("sidebarOJ").innerHTML = ` 
    
        <div class="title">
            <h2 class="TAG">MEEP</h2>
            <p class="subinfo">select a game</p>
        </div>
        <div class="g" id="sidebar" >
            <!-- <h3>GBA</h3>
            fix
            <h3>FLASH GAMES</h3>
             -->
        </div>
    `
    function tag(){
        document.getElementById("content").innerHTML = `<a class="titleScreen">BY 0UCH</a>`
    }
    tag()


    var CreatedBy = ["cooked up by ", "Handcrafted by caffine-fueled wizard ", "Coded by your friendly neighborhood programer ", "Spawned By ", "Developed by ", "Brough to life by ", "assembled with duct tape by "]
    const randomCratedBy = CreatedBy[Math.floor(Math.random() * CreatedBy.length)];
    document.getElementById("sidebarOJ").insertAdjacentHTML('beforeend', `<a id="footer">${randomCratedBy}0uch<a>`) 
    

    $('.TAG').on('click', function() {
        tag()
    })

    $('.subinfo').on('click', function(){
        document.getElementById("content").innerHTML = `
        <img src="https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-45.jpg?fit=700%2C465">
        `
    })
});


