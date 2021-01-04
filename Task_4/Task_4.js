var Totalmarks = 300;
var Markobtained = prompt('enter markobtained');
var Percentage = (Markobtained / Totalmarks) * 100;
Percentage = Math.round(Percentage)

document.write('<b>MarkSheet</b> <br><br><br><br>')
document.write(`Totalmarks:  ${Totalmarks} <br> Markobtained:  ${Markobtained} <br> Percentage:  ${Percentage} %<br>`)


if (Percentage >= 80) {
    document.write('Grade: A-one <br> Remarks: Excellent')
}

else if (Percentage >= 70) {
    document.write('Grade: A <br> Remarks: Good')
        
}
else if (Percentage >= 60) {
    document.write('Grade: B <br> Remarks: You need to improve')
        
}
else {
    document.write('Grade: Fail <br> Remarks: Sorry')
       
}