const loginForm = document.getElementById("contactForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName     = document.getElementById("fullName");
  const emailAddress = document.getElementById("emailAddress");
  const message      = document.getElementById("contactMessage");

  if (fullName.value == "") {
    alert("Please enter your name before submitting.");
  } 
  else if(message.value == "") {
    alert("Please enter a message before submitting.");
  }
  else {
    console.log(`Full Name: ${fullName}\nEmail Address: ${emailAddress}\nMessage:${message}`);

    var data = {}
    data['name']     = fullName.value;
    data['email']    = emailAddress.value;
    data['message']  = message.value;

    fetch("http://localhost:3000/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.status)
    //.then((json) => console.log(json));
    .then((value) => {
      if(value == 200) {
        alert("Submitted successfully!");
      }
      else {
        alert(`Error submitting form: ${value}`);
      }
    }).catch(e => {
      alert(e);
      console.log(e);
    });

    fullName.value = "";
    emailAddress.value = "";
    message.value = "";
  }
});