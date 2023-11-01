"use strict";

var stompClient = null;
var privateStompClient = null;

var socket = new SockJs("/ws");
stompClient = Stomp.over(socket);
stompClient.connect({}, function (frame) {
  console.log(frame);
  stompClient.subscribe("/public/messages", function (result) {
    show(JSON.parse(result.body));
  });
});

socket = new SockJs("/ws");
privateStompClient = Stomp.over(socket);
stompClient.connect({}, function (frame) {
  console.log(frame);
  stompClient.subscribe("/user/private", function (result) {
    show(JSON.parse(result.body));
  });
});

function sendMessage() {
  var text = document.getElementById("text").value;
  stompClient.send("/app/application", {}, JSON.stringify({ text: text }));
}

function sendPrivateText() {
  var text = document.getElementById("privateText");
  var receiver = document.getElementById("to").value;
  stompClient.send(
    "/app/chat",
    {},
    JSON.stringify({ text: text, to: receiver })
  );
}

function show(message) {
  var respone = document.getElementById("messages");
  var para = document.createElement("p");
  var message = document.createTextNode(message.text);
  para.appendChild(message);
  respone.appendChild(para);
}
