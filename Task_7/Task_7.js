var FirstNum = +prompt("Enter the First Number")
var Operator = prompt("Enter the Operator")
var SecondNum = +prompt("Enter the Second Number")

if (Operator === "+") {

    Result = FirstNum + SecondNum;
    document.write("Answer is : " + Result);
}
else if (Operator === "-") {
    Result = FirstNum - SecondNum;
    document.write("Answer is : " + Result);
}
else if (Operator === "*") {
    Result = FirstNum * SecondNum;
    document.write("Answer is : " + Result);
}
else if (Operator === "/") {
    Result = FirstNum / SecondNum;
    document.write("Answer is : " + Result);
}
else if (Operator === "%") {
    Result = FirstNum % SecondNum;
    document.write("Answer is : " + Result);
}


