"use strict";

console.log("COLOR SELECT RICKK!!!!!");


var Chatty = (function(chatApp){

    var userBackground = $('#background-select');
    var userText = $('#text-select');

    chatApp.setUserColor = function(){
        document.body.setAttribute(`style`, `background-color:${userBackground.val()};
            color: ${userText.val()}`);

    }


    return chatApp;

})(Chatty || {});
