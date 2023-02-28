window.addEventListener("message", function(event) {
    let data = event.data;
    
    if (data.countCheck == true) {
        $(".countdown").text(data.time+" - Remaining");
        $(".countdown").fadeIn();
        $(".centertextwrapper").fadeIn();
        $(".heartwrapper").fadeIn();
        $(".respawnlable").hide();
    } else if (data.countCheck == false) {
        $(".centertextwrapper").fadeOut();
        $(".heartwrapper").fadeOut();
        $(".countdown").fadeOut();
        $(".respawnlable").fadeOut();
    }

    if (data.respawn == true) {
        $(".centertextwrapper").fadeIn();
        $(".countdown").fadeOut();
        $(".heartwrapper").fadeIn();
        $(".respawnlable").fadeIn();
        $(".respawnlable").html(data.respawnInfo);
    } else if (data.respawn == false) {
        $(".centertextwrapper").fadeOut();
        $(".heartwrapper").fadeOut();
        $(".countdown").fadeOut();
        $(".respawnlable").fadeOut();
    }
});