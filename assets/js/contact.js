var contactForm = document.querySelector('form'),
    inputName = contactForm.querySelector('[name="name"]'),
    inputEmail = contactForm.querySelector('[name="email"]'),
    textAreaMessage = contactForm.querySelector('[name="message"]'),
    sendButton = contactForm.querySelector('#submit-contact');

    sendButton.addEventListener('click', function(event){
      event.preventDefault(); // prevent the form to do the post.

      sendButton.innerHTML = 'sending..';

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '//formspree.io/%70%61%73%73%2e%74%6f%2e%72%6f%62%65%72%74&#64%67%6d%61%69%6c%2e%63%6f%6d', true);
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