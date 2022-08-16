function Submit() {

  var name = document.getElementById("name");

  if (name.value != "") {
      
      swal({
        title: "Message sent!",
        text: "Thank you for your feedback. We will review it and get back to you as soon as possible.",
        icon: "success",
        button: "OK",
      });

      document.getElementById('name').value='';
      document.getElementById('emailid').value='';
      document.getElementById('text').value='';


  }

  }