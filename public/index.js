var socket = io();
var sendchar = function(e){
    var char = String.fromCharCode(e.keyCode);
    socket.emit('char added', char);
};


$("#fileText").on("keypress", function(event){
     if (event != undefined) {
         sendchar(event);
     }
});

socket.on("newChar", function(char){
    //TODO: ajouter le char au bon endroit...
});
