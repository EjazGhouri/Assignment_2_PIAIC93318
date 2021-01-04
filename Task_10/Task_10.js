var Password = "12345"

var pass = prompt("Enter the Password")

if (Password === pass) {
    alert("Correct! The password you entered matches the original password")
}

else if (pass === "") {

    alert("Please enter your password")
}

else {

    alert("Incorrect Password")
}


