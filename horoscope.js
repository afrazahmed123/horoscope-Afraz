var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", " "];
var horoscope = [1,2,3,4,5,6,7,8,9,10,11,12];
var messages = ["you're in good shape for socializing and connecting today.",
    "you're in great shape for organizing and purposeful activities around the home or with family today.",
    "you're in great shape for clarifying an issue related to friendship, learning, or a project today.",
    "you may be appreciated for your efforts and dedication to a project or your work today.",
    "this can be a day in which someone's loyalty or commitment touches you.",
    "today is good for giving meaning to a past relationship or lingering feelings for someone.",
    "you're in good for appreciation for your commitment and dedication today.",
    "today's energies are particularly useful for a sense of purpose derived from your work, the help you give others, and your responsibilities.",
    "you might thoroughly enjoy efforts to bring a plan or idea down to earth today.",
    "you'll want to invest some extra energy and attention into your comfort, home, security, and safety today.",
    "Today's energies are strong for both your practical and social affairs.",
    "you're in a fine position for making reasonable assessments and judgments today.",
    "That isn't a real date.  You livin' in the 4th dimension."];
var images = ["images/capricorn.jpg", "images/aquarius.jpg", "images/pisces.jpg", "images/aries.jpg", "images/taurus.jpeg", "images/gemini.jpg", "images/cancer.jpg",
    "images/leo.jpg", "images/virgo.jpg", "images/libra.jpg", "images/scorpio.jpg", "images/sagittarius.jpg", "images/invalid.jpg"];

function whenClicked() {
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var returnSign = getSign(month, day);
    var name = document.getElementById('username').value;
    var birthday = ifBirthday(month, day);
    var pic = document.getElementById('image').src = images[returnSign];

    // if(name.length >= 1){
    //     document.getElementById('horoscope').innerHTML = "Please enter your name";
    // }
    if (returnSign <= 11 && name.length > 0){
            document.getElementById('horoscope').innerHTML = name + ", " + birthday + "you are a " + signs[returnSign] + ". " + messages[returnSign];
    } else {
            document.getElementById('horoscope').innerHTML = birthday + "you are a " + signs[returnSign] + ". " + messages[returnSign];
    }
}

function getSign(month, day){

    if(month == 1 && day >= 29){
        return 12;
    }
    if(month == 3 && day > 30){
        return 12;
    }
    if(month == 5 && day > 30){
        return 12;
    }
    if(month == 8 && day > 30){
        return 12;
    }
    if(month == 10 && day > 30){
        return 12;
    }

//January
if(month == 0){
    if(day >= 1 && day <= 19) {
        return 0;
    }
     if(day >= 20 && day <= 31) {
         return 1;

}
//February
if(month == 1) {
    if (day >= 1 && day <= 18) {
        return 1;
    }
    if (day >= 19 && day <= 28)
        return 2;
    }
}
// March
if(month == 2){
    if(day >= 1 && day <= 20) {
        return 2;
    }
    if(day >= 21 && day <= 31) {
        return 3;
    }
}
// April
if(month == 3){
    if(day >= 1 && day <= 19) {
        return 3;
    }
    if(day >= 20 && day <= 30) {
        return 4;
    }
}
// May
if(month == 4){
    if(day >= 1 && day <= 20) {
        return 4;
    }
    if(day >= 21 && day <= 30) {
       return 5;
    }
}
// June
if(month == 5){
    if(day >= 1 && day <= 20) {
        return 5;
    }
    if(day >= 21 && day <= 30) {
        return 6;
    }
}
// July
if(month == 6){
    if(day >= 1 && day <= 22) {
        return 6;
    }
    if(day >= 23 && day <= 31) {
        return 7;
    }
}

// AUGUST
if(month == 7){
    if(day >= 1 && day <= 22) {
        return 7;
    }
    if(day >= 23 && day <= 31) {
        return 8;
    }
}
// September
if(month == 8){
    if(day >= 1 && day <= 22) {
        return 8;
    }
    if(day >= 23 && day <= 30) {
        return 9;
    }
}
// October
if(month == 9){
    if(day >= 1 && day <= 22) {
        return 9;
    }
    if(day >= 23 && day <= 31) {
       return 10;
    }
}
// November
if(month == 10){
    if(day >= 1 && day <= 21) {
        return 10;
    }
    if(day >= 22 && day <= 31) {
        return 11;
    }
}

if(month == 11){
    if(day >= 1 && day <= 21) {
        return 11;
    }
    if(day >= 22 && day <= 31) {
        return 0;
    }
}
}

function ifBirthday(m, d){
    var bday = "";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(d == currentDay && m == currentMonth){
        bday = "Happy Birthday! ";
    }
    return bday;
}



