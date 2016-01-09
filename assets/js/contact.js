var contactForm = document.querySelector('form'),
    inputName = contactForm.querySelector('[name="name"]'),
    inputEmail = contactForm.querySelector('[name="email"]'),
    textAreaMessage = contactForm.querySelector('[name="message"]'),
    sendButton = contactForm.querySelector('#submit-contact');

    function hex2a(hex){
      var str = '';
      for (var i = 0; i < hex.length; i += 2) 
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16)); 
      return str;}

    var hidden=hex2a('2f2f666f726d73707265652e696f2f706173732e746f2e726f6265727440676d61696c2e636f6d');
    contactForm.action = hidden;
    sendButton.addEventListener('click', function(event){
      event.preventDefault(); // prevent the form to do the post.

      sendButton.innerHTML = 'sending..';
      var xhr = new XMLHttpRequest();
      xhr.open('POST', hidden, true);
      xhr.setRequestHeader("Accept", "application/json")
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

      xhr.send(
        "name=" + inputName.value +
        "&email=" + inputEmail.value +
        "&message=" + textAreaMessage.value);

      xhr.onloadend = function (res) {
        if (res.target.status === 200){
          sendButton.style.backgroundColor = '#42A842';
          sendButton.innerHTML = 'Message sent!';
        }
        else {
          sendButton.innerHTML = 'Error!';
        }
      }
    });