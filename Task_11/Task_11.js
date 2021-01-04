var Time = +prompt("Enter Time")

if( Time >= 0000 && Time < 1200){
    document.write("Good Morning!")
}
else if(Time >= 1200 && Time < 1700){
    document.write("Good Afternoon")
}
else if(Time >= 1700 && Time < 2100){
    document.write("Good Evening")
}
else if(Time >= 2100 && Time < 2359){
    document.write("Good Night")
}
else(
    
    document.write("Enter Correct Time!")
)