<html>
  <head>
    <title>McIntyre web130 - contact Forrest</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <style>
      .error{
        font-family: sans-serif;
        color:red;
        font-weight:bold;
        text-transform:uppercase;
        text-shadow: 2px 2px 1px black;
      }
      .hidden{
        display:none;
      }
    </style>
    <script type="text/javascript">
      window.onload = function() {
        document.getElementById("contact-form").onsubmit = validateContact;
      }
      function validateEmail(email) { 
        // http://stackoverflow.com/a/46181/11236
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      function validateText(fieldID, errorID){
        var field = document.getElementById(fieldID).value;
        var error = document.getElementById(errorID);
        if (field == "") {
          error.className = "error";
          return false;
        } else {
          error.className = "hidden";
          return true;
        }
      }
      function validateZip(fieldID, errorID){
        var field = document.getElementById(fieldID).value;
        var error = document.getElementById(errorID);
        if (field.length != 5) {
          error.className = "error";
          return false;
        } else {
          error.className = "hidden";
          return true;
        }
      }
      function validateEmailField(fieldID, errorID){
        var field = document.getElementById(fieldID).value;
        var error = document.getElementById(errorID);

        if (validateEmail(field) || field == "") {
          error.className = "error";
          return false;
        } else {
          error.className = "hidden";
          return true;
        }
      }
      function validateCheckbox(fieldID1,fieldID2,fieldID3,fieldID4, errorID){
        var checkbox1 = document.getElementById(fieldID1).checked;
        var checkbox2 = document.getElementById(fieldID2).checked;
        var checkbox3 = document.getElementById(fieldID3).checked;
        var checkbox4 = document.getElementById(fieldID4).checked;
        var error = document.getElementById(errorID);
        if (checkbox1 || checkbox2 || checkbox3 || checkbox4) {
          error.className = "hidden";
          return true;
        } else {
          error.className = "error";
          return false;
        }
      }
      function validateRadio(radios, errorID)
      {
        var error = document.getElementById(errorID);
        for (i = 0; i < radios.length; ++ i)
        {
          if (radios [i].checked){
            alert('true');
            error.className = "hidden";
            return true;
          } 
        }
        alert('false');
        error.className = "error";
        return false;
      }
      function validateContact() {
        // if the enter nothing in the text box
        // then show and alert, and don't go to success
        // otherwise go directly to the success page with no alert
        var validFirst = validateText("first-name", "error-first-name");
        var validLast = validateText("last-name", "error-last-name");
        var validAddress = validateText("address", "error-address");
        var validCity = validateText("city", "error-city");
        var validZip = validateZip("zip", "error-zip");
        var validEmail = validateEmailField("email", "error-email");
        var validEmail2 = validateEmailField("email2", "error-email2");
        var validFood = validateCheckbox("food1","food2","food3","food4", "error-food");
        var validCar = validateRadio (document.forms["contact-form"]["car"], "error-car");

        return validFirst && validLast && validAddress && validCity && validZip && validEmail && validEmail2 && validFood && validCar;
      }
    </script>
  </head>
  
  <body>
    <header>
      <h1>Web 130</h1>
    <h2 class="name">Contact Forrest</h2>
    </header>
    
    <nav id="main-menu">
      <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.php">Contact</a></li>
        <li><a href="#">Classwork</a>
          <ul>
            <li><a href="classwork/01-css-dropdown">Dropdowns</a></li>
            <li><a href="classwork/02-less/exercise1">LESS css 1</a></li>
            <li><a href="classwork/02-less/exercise2">LESS css 2</a></li>
          </ul>
        </li>
      </ul>
    </nav> 
    <div class="clear"></div>
    
    <div id="left">
<!--       
<script language="JavaScript"> 
document.write("<h2>Welcome, " + yourname + "! <\/h2>");
</script> 
 
      <button>Submit!</button> 

      <p>words</p> -->
      <form id="contact-form" action="success.html">
      <p>
        <label for="first-name">First Name:</label>
        <input name="first-name" id="first-name" type="text">
        <span id="error-first-name" class="error hidden">* Error</span>
      </p>
      <p>
        <label for="last-name">Last Name:</label>
        <input name="last-name" id="last-name" type="text">
        <span id="error-last-name" class="error hidden">* Error</span>
      </p>
      <p>
        <label for="address">Address:</label>
        <input name="address" id="address" type="text">
        <span id="error-address" class="error hidden">* Error</span>
      </p>
      <p>
        <label for="city">City:</label>
        <select name="city" id="city">
          <option value="bothell">Bothell</option>
          <option value="seattle">Seattle</option>
          <option value="tacoma">Tacoma</option>
          <option value="other">Other</option>
        </select>
        <span id="error-city" class="error hidden">* Error</span>
      </p>
      <p>
        <label for="zip">Zip Code:</label>
        <input name="zip" id="zip" type="text">
        <span id="error-zip" class="error hidden">* Must only be 5 numbers</span>
      </p>
      <p>
        <label for="email">E-Mail:</label>
        <input name="email" id="email" type="text">
        <span id="error-email" class="error hidden">* Error</span>
      </p>
      <p>
        <label for="email2">Re enter E-Mail:</label>
        <input name="email2" id="email2" type="email">
        <span id="error-email2" class="error hidden">* Error</span>
      </p>
      <p>Which of the following foods do you like?</p>
      <p>
        <label for="food">Pizza</label>
        <input type="checkbox" name="food" id="food1" value="pizza" />
        <label for="food">Pasta</label>
        <input type="checkbox" name="food" id="food2" value="pasta" />
        <label for="food">Salad</label>
        <input type="checkbox" name="food" id="food3" value="salad" />
        <label for="food">Calzones</label>
        <input type="checkbox" name="food" id="food4" value="calzones" />
        <span id="error-food" class="error hidden">* Error</span>
      </p>
      <p>Do you have a car?</p>
      <p>
        <label for="car">Yes</label>
        <input type="radio" name="car" id="car1" value="yes" />
        <label for="car">No</label>
        <input type="radio" name="car" id="car2" value="no" />
        <span id="error-car" class="error hidden">* Error</span>
      </p>

      <input type="submit" name="submit" value="submit">
    </form>
    </div>
    
     <div id="side">
      <img src="images/forrest.jpg" alt="picture of Forrest" class="flex" />
    </div>
  
      <footer>
      <p>Copyright Forrest McIntyre 2014</p>
    </footer>
    
      </body>
</html>