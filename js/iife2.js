"use strict";

var Chatty = (function(chatApp){

	chatApp.writeToDom = function(data){
        $('#write').html("");
		 for (var i in data) {

			$('#write').append(`<div class="individualMsg">
									<div class="row">
										<div class="col s9 grey-text text-darken-3">
											<p class="message">${data[i].text}</p>
											<p class="user">-${data[i].user}</p>
											<p class="date">${data[i].date}</p>
										</div>
										<div class="col s3 buttons">
											<a class="delete waves-effect waves-light btn">Delete</a>
									</div>
								</div>
								</div>`);
		}
		// }
        Chatty.deleteButton();
        Chatty.scrollBottom();
        $('#clear-log').removeAttr("disabled");


	}

	chatApp.scrollBottom = function(){
		$('#chat-log').scrollTop = $('#chat-log').scrollHeight;
	}

	return chatApp;

})(Chatty || {});
