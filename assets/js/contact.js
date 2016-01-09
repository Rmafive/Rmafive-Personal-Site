var contactForm = document.querySelector('form'),
    inputName = contactForm.querySelector('[name="name"]'),
    inputEmail = contactForm.querySelector('[name="email"]'),
    textAreaMessage = contactForm.querySelector('[name="message"]'),
    sendButton = contactForm.querySelector('#submit-contact');

    sendButton.addEventListener('click', function(event){
      event.preventDefault(); // prevent the form to do the post.

      sendButton.innerHTML = 'sending..';

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '//formspree.io/pass.to.robert@gmail.com', true);
      xhr.setRequestHeader("Accept", "application/json")
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

      xhr.send(
        "name=" + inputName.value +
        "&email=" + inputEmail.value +
        "&message=" + textAreaMessage.value);

      xhr.onloadend = function (res) {
        if (res.target.status === 200){
          sendButton.innerHTML = 'Message sent!';
          sendButton.style.backgroundColor = '#42A842';
        }
        else {
          sendButton.innerHTML = 'Error!';
        }
      }
    });