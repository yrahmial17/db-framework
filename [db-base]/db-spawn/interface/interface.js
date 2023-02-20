$(document).ready(function(){
    $('.tooltipped').tooltip();

    $(".map-wrapper").on("click", ".Sbtn", function () {
        $(".spawn-box .spawn-name").text($(this).data("info"))
        $(".spawnBtn").data("spawn-name", $(this).data("location"))
        $(".spawnBtn").data("spawn-housecheck", $(this).data("housecheck"))
        $(".spawn-box").fadeIn(100);
    })
    
    $(".house-box").on("click", ".Sbtn", function () {
        $(".spawn-box .spawn-name").text($(this).data("info"))
        $(".spawnBtn").data("spawn-name", $(this).data("location"))
        $(".spawnBtn").data("spawn-coordx", $(this).data("x"))
        $(".spawnBtn").data("spawn-coordy", $(this).data("y"))
        $(".spawnBtn").data("spawn-coordz", $(this).data("z"))
        $(".spawnBtn").data("spawn-housecheck", $(this).data("housecheck"))
        $(".spawn-box").fadeIn(100);
    })

    $(".spawn-buttons").on("click", ".spawnBtn", function () {
        Spawn(this);
    })

    window.addEventListener("message", (e) => {
        if (e.data.action == "display") {
            $("body").css("background", "rgba(0,0,0,0.7)");
            $(".spawn-wrapper").fadeIn(500);
            if (e.data.jail) {
                $.post("https://db-spawn/spawn", JSON.stringify({
                    location: 'last'
                }))
                $("body").css("background", "transparent");
                $(".spawn-box").fadeOut(100);
                $(".spawn-wrapper").fadeOut(300);
            }
            if (e.data.displayHouses == "Yes") {
                $(".house-box").css("display", "inline-block");
            } else {
                $(".house-box").css("display", "none");
            }
            let housesArray = e.data.housesArray
            $(".house-buttons").empty();
            $.each(housesArray, function (index, value) {
                $('.house-buttons').prepend(`
                <button class="house-btn Sbtn" data-housecheck="House" data-info="${value.name}" data-location="House" data-x=${value.x} data-y=${value.y} data-z=${value.z}>${value.name}</button>`
                );
            });
        }
    })
})

function Spawn() {
    var location = $(".spawnBtn").data("spawn-name");
    var x = $(".spawnBtn").data("spawn-coordx");
    var y = $(".spawnBtn").data("spawn-coordy");
    var z = $(".spawnBtn").data("spawn-coordz");
    var housecheck = $(".spawnBtn").data("spawn-housecheck");
    $.post("https://db-spawn/spawn", JSON.stringify({
        location: location,
        x: x,
        y: y,
        z: z,
        housecheck: housecheck
    }))
    $("body").css("background", "transparent");
    $(".spawn-box").fadeOut(100);
    $(".spawn-wrapper").fadeOut(300);
}

function GoBack() {
    $(".spawn-box").fadeOut(350);
}