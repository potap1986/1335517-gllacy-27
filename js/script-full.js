
      var link = document.querySelector(".send-letter-link");

      var popup = document.querySelector(".send-letter");
      var popup1 = document.querySelector(".modal-window");

      var close = popup.querySelector(".close");

      var form = popup.querySelector("form");

      var name = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=email1]");
      var letter = popup.querySelector("[name=letter]");

      var isStorageSupport = true;
      var storageName =  "";
      var storageEmail =  "";
  
      try {
       storageName = localStorage.getItem("name");
       storageEmail = localStorage.getItem("email");
      } catch (err) {
      isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        popup1.classList.add("modal-show1");

        if (storageName) {
        name.value = storageName;
        email.focus();
        } else {
          name.focus();
        }     
        
        if (storageEmail) {
        email.value = storageEmail;
        letter.focus();
        } else {
          email.focus();
        }        
      });

      close.addEventListener("click", function (evt) {
       evt.preventDefault();
       popup.classList.remove("modal-show");
       popup1.classList.remove("modal-show1");
       popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt) {
        if (!name.value || !email.value || !letter.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          if (isStorageSupport)  
           {localStorage.setItem("name", name.value);
            localStorage.setItem("email", email.value);
           }
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
           if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup1.classList.remove("modal-show1");
            popup.classList.remove("modal-error");
          }
        }
      });