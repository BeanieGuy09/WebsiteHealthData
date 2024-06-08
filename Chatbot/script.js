function enableInput() {
  var input = document.getElementById('textInput');
  var clickable = document.getElementById('clickable');
  input.style.display = 'block';
  clickable.style.display = 'none';
  input.focus();
}

function handleKeyUp(event) {
  if (event.key === 'Enter') {
      var input = document.getElementById('textInput');
      var clickable = document.getElementById('clickable');
      var displayArea = document.getElementById('displayArea');

      if (input.value.trim() !== '') {
          // Create a new bubble for each message
          var newBubble = document.createElement('div');
          newBubble.classList.add('chat-bubble');
          newBubble.textContent = input.value;
          displayArea.appendChild(newBubble);
      }

      input.value = ''; // Clear input
      input.style.display = 'none';
      clickable.style.display = 'block';
  }
}
