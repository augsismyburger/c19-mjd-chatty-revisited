"use strict";

console.log("iifeopt");
var Chatty = (function (chatApp) {
    // NAV CLEAR FUNCTION
    chatApp.navClear = function () {

        $('#message-input').val('');
        var selects = $('.option');
        for (let i = 0; i < selects.length; i++) {
            selects[i].selected = false;
        }
        Chatty.deleteAllMessages();

        Chatty.writeToDom();
        $('#clear-log').prop("disabled", true);
    }

    // ENTER KYPRESS FUNCTION
    chatApp.enterKeyPress = function () {
        $('#message-input').on("keydown", function(event) {
            if (event.keyCode === 13) {
                Chatty.addMessages($('#message-input').val(), $('#user-select').val());
                $('#message-input').val('');
                Chatty.xhrfunction();
            }
        });
    }
    // SELECT THEME FUNCTION
    chatApp.selectTheme = function () {
        switch ($('#theme-select').val()){
            case "1":
                $('body').removeClass("darkTheme");
                break;
            case "2":
                $('body').addClass("darkTheme");
                break;
        }
    }

    // Select Text Size Function
    chatApp.selectTextSize = function () {
        switch ($('#text-size-select').val()){
            case "a":
                $("#write").removeClass("largeText");
                break;
            case "b":
                $("#write").addClass("largeText");
                break;
        }
        chatApp.chatViewInnerEL();
    }

    // DELETE MESSAGE BUTTON Event Listener
    chatApp.deleteButton = function () {

        $('.delete').click(function(event) {
            event.target.closest('.individualMsg').remove();
        });
    }

    // Default Event Listeners
    chatApp.defaultListeners = function () {
        $("#color-btn").click(Chatty.setUserColor);
        $('#btn-selectTheme').click(Chatty.selectTheme);
        $("#btn-selectText").click(Chatty.selectTextSize);
        $('#clear-log').click(Chatty.navClear);
    }

    chatApp.optionsView = function (){

        $("#optionsClick").click( function(){

            // console.log("options view clicked");
            $("#optionsView").show();
            $("#chatLogView").hide();
            $("#footerInput").hide();
            $("#footer").addClass("footerHeight");
        })
    }

    chatApp.chatView = function (){

        $("#chatLogClick").click( function() {
            $("#optionsView").hide();
            $("#chatLogView").show();
            $("#footerInput").show();
            $("#footer").removeClass("footerHeight");
    });
}

    return chatApp;
})(Chatty || {});


