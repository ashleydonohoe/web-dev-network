setInterval(function() {
  if(document.getElementById("message-list")) {
      document.getElementById('message-list').scrollTop = document.getElementById('message-list').scrollHeight;
    }
  }, 5000);
