var secret = Math.floor(Math.random() * 10) 

var guess = prompt("Enter GuessNumber")

if ( secret === guess){
    
    document.write("Bingo! Correct answer <br><br>" )
}
if (guess > secret ){
    document.write("Close enough to the Correct answer <br><br>")
}

document.write("Secret Number : " + secret + "<br><br>")  

