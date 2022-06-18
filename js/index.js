let sideMenuWidth = $("#side-menu").outerWidth()

// side menu logic
$("#menu-btn").click(function(){
    let leftMenu = $("#side-menu").css("left")
    if (leftMenu == "-250px") {   
        $("body").animate({marginLeft:sideMenuWidth})
        $("#side-menu").animate({left:0})
    } else {
        $("body").animate({marginLeft:0})
        $("#side-menu").animate({left:-250})
    }
})

// close side menu logic
$("#close-btn").click(function(){
    $("body").animate({marginLeft:0})
    $("#side-menu").animate({left:-250})
})

// accordion menu logic
$(".list-item").click(function(){
    $(this).next().slideDown("slow");
    $(".list-content").not( $(this).next()).slideUp("slow")
})


// countdown logic
function getDiffTime() {
    const partyDate = new Date("Jun 30, 2022 15:37:25").getTime();
    const currentDate = new Date().getTime()
    const diffTime = partyDate - currentDate;
    return diffTime;
}

function getDiffSeconds() {
    const diffTime = getDiffTime()
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
    return diffSeconds;
}

function getDiffMins() {
    const diffTime = getDiffTime()
    const diffMins = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    return diffMins;
}

function getDiffHours() {
    const diffTime = getDiffTime()
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return diffHours;
}

function getDiffDays() {
    const diffTime = getDiffTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

var x = setInterval(function(){

    $("#days").text(`${getDiffDays()} D`);
    $("#hours").text(`${getDiffHours()} H`);
    $("#mins").text(`${getDiffMins()} M`);
    $("#seconds").text(`${getDiffSeconds()} S`);
},1000)


// remaining Characters logic
$("#message").keyup(function(){
    $("#remaining").text(`${100 - $("#message").val().length} Characters Reamining`)
})