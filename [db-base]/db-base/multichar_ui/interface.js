let lastCid;
let SettingsData = [];
// $(function() {
    // $(".characters-list").hide();
    // $(".container").fadeIn(450);
    // $(".init").fadeIn(450);
    // $('[data-charid=1]').html('<div class="slot-name">YM DEVELOPER</div>')
    // $('[data-charid=2]').html('<div class="slot-name">YM DEVELOPER CHAR2</div>')

// });

addEventListener("message", ({data}) => {
    switch (data.action) {
        case "init":
            $(".characters-list").hide();
            $(".container").fadeIn(450);
            $(".init").fadeIn(450);
        break;
        case "characters-list":
            $(".container").fadeIn(450);
            $(".characters-list").fadeIn(450);
            // RestartChars()
            $("[data-charid=1]").delay(500).animate({
                left: "7%",
            }, {
                duration: 1200, // 2000
                complete: function() {
                    $("[data-charid=2]").animate({
                        left: "14%",
                    }, {
                        duration: 1200,
                        complete: function() {
                            $("[data-charid=3]").animate({
                                left: "20%",
                            }, {
                                duration: 1200,
                                complete: function() {
                                    $("[data-charid=4]").animate({
                                        left: "26%",
                                    }, {
                                        duration: 1200,
                                    })
                                }
                            })
                        }
                    })
                }
            });
        break;
        case "characters-close":
            $(".container").fadeOut(450);
        break;
        case "setup":
            let chars = data.chars;
            if (chars !== null) {
                $.each(chars, function(index, char) {
                    $('[data-charid='+char.cid+']').html('');
                    $('[data-charid='+char.cid+']').html(`<div class="slot-name">${char.firstname + " "+ char.lastname}</div>`)
                })
            }
        break;
        case "select":
            var charInfo = data.chars;
            let char = $("[data-charid="+lastCid+"]");
            if (charInfo == "Empty") {
                char.html('<div class="create-button" id="create-cid-1" data-cid='+lastCid+'>Empty Slot</div>');
                $("#charBtns").fadeOut(250);
            } else {
                char.css({
                    top: "-13vh",
                    height: "20vh",
                });
                $.each(charInfo, function(index, player) {
                    char.html(
                        `
                            <div class="slot-name">${player.firstname +" "+ player.lastname}</div>
                            <div class="charInfo">
                                <hr>
                                <br>
                                <p><span>Birth Date: </span><span id="character-dob">${player.dob}</span></p>
                                <p><span>Gender: </span><span id="character-sex">${player.sex}</span></p>
                                <p><span>Cash: </span><span id="cash">${player.cash}$</span></p>
                                <p><span>Bank: </span><span id="bank">${player.bank}$</span></p>
                                <div id="charBtns">
                                    <button data-cid="${lastCid}" class="selectChar">Spawn</button>
                                    <button data-cid="${lastCid}" class="deleteChar">Delete</button>
                                </div>
                            </div>
                        `
                    )
                })
            }
        break;
        case "updateSettings":
            $('input[name="Slots-1"]').prop('checked', data.char),
            $('input[name="Slots-2"]').prop('checked', data.char2),
            $('input[name="Slots-3"]').prop('checked', data.char3),
            $('input[name="Slots-4"]').prop('checked', data.char4),
            $('input[name="scoreboard"]').prop('checked', data.scoreboard);
            $('input[name="Background"]').prop('checked', data.bg);
            $('input[name="slotColor"]').prop('checked', data.slotColor);
            $('input[name="opacity"]').prop('checked', data.opacity);
            $('input[name="Background-dark"]').prop('checked', data.darkBG);
            if (data.char) {
                $("[data-charid=1]").fadeIn(750);
            } else {
                $("[data-charid=1]").fadeOut(750);
            }
            if (data.char2) {
                $("[data-charid=2]").fadeIn(750);
            } else {
                $("[data-charid=2]").fadeOut(750);
            }
            if (data.char3) {
                $("[data-charid=3]").fadeIn(750);
            } else {
                $("[data-charid=3]").fadeOut(750);
            }
            if (data.char4) {
                $("[data-charid=4]").fadeIn(750);
            } else {
                $("[data-charid=4]").fadeOut(750);
            }
            if (data.bg) {
                $(".characters-list").css({
                    ["background"]: "#232b34",
                })
            }
            if (data.darkBG) {
                $(".characters-list").css({
                    ["background"]: "#1c1c1c",
                })
            }
            if (data.slotColor) {
                $(".character").css({
                    ["background"]: "#1c1c1c"
                })
            }
            if (data.opacity) {
                $(".character").css({
                    ["background"]: "#1c1c1cda"
                })
            }
            if (data.scoreboard) {
                $.post('https://db-base/PlayerList', JSON.stringify({}));
            } else {
                $(".PlayerList").slideUp(450);

            }
            if (!data.slotColor && !data.opacity) {
                $(".character").css({
                    ["background"]: "rgb(36, 58, 75)",
                })
            }
            if (!data.bg && !data.darkBG) {
                $(".characters-list").css({
                    ["background"]: "none",
                })
            }
        break;
        case "PlayerList":
            $(".PlayerList").slideDown(450);
            $(".playercount").html(`${data.players}/${data.max}<span style="display: block;">Your ID is <span style="color: #3683CC;">${data.id}</span>`)
        break;
    }
});

// var canClick = true;
$(document).on('click','.character',function(){
    var cid = $(this).data('charid');
    // if (canClick && cid != lastCid) {
    //     canClick = false;
        lastCid = cid;
        RestartChars()
        // if ($(".selectChar").data("clicked") && $(".deleteChar").data("clicked")) {
            $.post('https://db-base/createPed', JSON.stringify({
                ["cid"]: lastCid,
                // ["clicked"]: true,
            }));
        // } else {
        //     $.post('https://db-base/createPed', JSON.stringify({
        //         ["cid"]: lastCid,
        //         ["clicked"]: false,
        //     }));
        // }    
    // } else {
    //     canClick = true;
    //     RestartChars()
    //     console.log("Click Again.")
    // }
});

$(document).on("click", ".saveSettings", () => {
    let SettingsData = {
        ["char"]: $('input[name="Slots-1"]').prop('checked'),
        ["char2"]: $('input[name="Slots-2"]').prop('checked'),
        ["char3"]: $('input[name="Slots-3"]').prop('checked'),
        ["char4"]: $('input[name="Slots-4"]').prop('checked'),
        ["scoreboard"]: $('input[name="Scoreboard"]').prop('checked'),
        ["bg"]:  $('input[name="Background"]').prop('checked'),
        ["bg-dark"]: $('input[name="Background-dark"]').prop('checked'),
        ["slotColor"]: $('input[name="slotColor"]').prop('checked'),
        ["opacity"]: $('input[name="opacity"]').prop('checked'),
    }
    $.post(
        'https://db-base/updateSettings', 
        JSON.stringify({
            ["SettingsData"]: SettingsData,
        }),
    );
})

$(document).on("click", ".SettingsBtn", () => {
    $("#Settings").fadeIn(750);
})

$(document).on('click','.deleteChar',function(){
    $("#deleteCharacter").fadeIn(250);
    $(".delete").data('cid', lastCid);
});

$(document).on('click','.selectChar',function(){
    $(".container").fadeOut(750);
    $.post('https://db-base/selectCharacter', JSON.stringify({
        ["cid"]: lastCid
    }));
});

function RestartChars() {
    let Char = $("[data-charid=1]");
    let Char2 = $("[data-charid=2]");
    let Char3 = $("[data-charid=3]");
    let Char4 = $("[data-charid=4]");
    Char.css({
        ["top"]: "0",
        ["height"]: "7vh",
    });
    Char2.css({
        ["top"]: "0",
        ["height"]: "7vh",
    });
    Char3.css({
        ["top"]: "0",
        ["height"]: "7vh",
    });
    Char4.css({
        ["top"]: "0",
        ["height"]: "7vh",
    });
    $(".charInfo").hide();
}

$(".delete").click(function(){
    var cid = $(this).data('cid')
    $.post('https://db-base/deleteCharacter', JSON.stringify({
        ["cid"]: cid
    }));
    $("#deleteCharacter").hide();
    $(".characters-list").fadeIn(500);
    RestartChars()
    $('[data-charid=' + cid +']').html('')
    $('[data-charid=' + cid +']').html('<div class="create-button" id="create-cid-'+cid+'" data-cid="'+cid+'">Empty Slot</div>')
    $('[data-charid=' + cid +']').data('')
});

$(".create-button").click(function(){
    var cid = $(this).data('cid');
    $(".characters-list").css("filter", "blur(5px)");
    $("#createCharacter").fadeIn(250);
    $('.submit').data('cid', cid)
})

$(".cancel").click(function(){
    $(".characters-list").css("filter", "blur(0px)");
    $(".characters-list").fadeIn(300);
    $("#createCharacter").fadeOut(400);
    $("#deleteCharacter").fadeOut(400);
})

$(".submit").click(function(){
    var cid = $(this).data('cid'); // todo: if vals not nil then keep, else show red border
    var data = {
        ["firstname"]: $('#firstname').val(),
        ["lastname"]: $('#lastname').val(),
        ["sex"]: $('#sex').val(),
        ["dob"]: $('#date').val(),
        ["twitter"]: "YMM",
        ["cid"]: cid
    };
    $(".characters-list").css("filter", "blur(0px)");
    $("#createCharacter").fadeOut(250);
    $(".container").delay(270).fadeOut(250);
    $.post('https://db-base/createCharacter', JSON.stringify({
        ["charData"]: data
    }))
});

$(".playButton").click(function(){
    $(".init").hide();     
    $.post('https://db-base/play', JSON.stringify({}))
    return
})