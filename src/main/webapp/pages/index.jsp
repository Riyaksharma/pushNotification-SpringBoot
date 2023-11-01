<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Push Notification</title>
</head>

<body>
    <div>
        <button id="sendMessage" onclick="sendMessage()">Send Public Message</button>
        <input type="text" id="text" placeholder="text">
    </div>
    <br>
    <div>
        <button id="sendPrivateText" onclick="sendPrivateText()">Send Private Text</button>
        <textarea name="privatebox" id="text" placeholder="Write your text" cols="30" rows="10"></textarea>
        <input type="text" id="to" placeholder="receiver">
    </div>

</body>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@stomp/stompjs@7.0.0/bundles/stomp.umd.min.js"></script>
<script src="../js/main.js"></script>

</html>