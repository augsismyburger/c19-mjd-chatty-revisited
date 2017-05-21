"use strict";

console.log("iife1");


var Chatty = (function(chatApp){

    chatApp.xhrfunction = function (){
        console.log("step 1");
        $.ajax({
            url: 'https://kachatstrophe.firebaseio.com/messages.json',
            success: function(data) {
                Chatty.writeToDom(data);
            }
        });


            Chatty.enterKeyPress();
            Chatty.defaultListeners();
            Chatty.optionsView();
            Chatty.chatView();
    }

    chatApp.addMessages = function(message, user){

        var newObject = {
                "date": Chatty.setDate(),
                "text": message,
                "user": user
                }

        $.ajax({
            url: "https://kachatstrophe.firebaseio.com/messages.json",
            method: "POST",
            data: JSON.stringify(newObject)
        })
        .done(function(response) {
            console.log("response from Firebase:", response);
        })
    }


    chatApp.deleteAllMessages = function() {
        $('#chat-log').html();
    }


    return chatApp;

})(Chatty || {});




