var socket = io();
/**
 * The message object
 */
var message = {
    bodyElement: $('#messageBody'),
    getVal: function () {
        return this.bodyElement.val();
    },
    clear: function () {
        this.bodyElement.val('');
    }
};
/**
 * Append new message to DOM
 */
socket.on('appendMessage', function (data) {
    $('.chat').append(data);
    //scroll to footer
    $("html, body").animate({scrollTop: $(document).height() - $(window).height()});
});
/**
 * 
 * On submit event listener
 */
$("#message").submit(function (e) {
    e.preventDefault();
    if (message.getVal().length > 0) {
        socket.emit('sendMessage', {author: "name", text: message.getVal(), time: 123123, sessionId: socket.id});
    }
    message.clear();
});