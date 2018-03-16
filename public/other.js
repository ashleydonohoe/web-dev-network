console.log("loading");
setInterval(function() {
  document.getElementById('message-list').scrollTop = document.getElementById('message-list').scrollHeight;
}, 5000);
