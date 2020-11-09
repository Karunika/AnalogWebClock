var numberWrapperList = document.querySelectorAll('.number-wrapper');
var numberList = document.querySelectorAll('.number');

for(var i = 0; i < numberWrapperList.length; i++){
    numberWrapperList[i].style.transform = 'rotate(' + ( (90 * i) + 90 ) + 'deg)';
};

numberList.forEach((number, index) => {
    number.style.transform = 'rotate(' + ( (-90) * index - 90 ) + 'deg)';
});


var lineList = document.querySelectorAll('.line');
var i = 0;
var m = -1;
// i is for the purpose of selecting consecutive lineList element and m is the multiplier to get the degree of rotation
while(i < lineList.length){
    m++;
    if((i + 1) % 2 !== 0){
        m++;
    };
    lineList[i].style.transform = 'rotate(' + m * 30 + 'deg)';
    i++;
};

// timing function
var currentDate = new Date();
var secHand = document.querySelector('.sec-hand');
var minHand = document.querySelector('.min-hand');
var hrHand = document.querySelector('.hr-hand');

setInterval(() => {
    var currentDate = new Date();
    var second = currentDate.getSeconds();
    var minute = currentDate.getMinutes();
    var hour = currentDate.getHours();
    var secondRotate = second * 6;
    var minuteRotate = (minute * 6) + (second * 0.1);
    var hourRotate = (hour * 30) + (minute * 0.5);
    secHand.style.transform = 'rotate(' + secondRotate + 'deg)';
    minHand.style.transform = 'rotate(' + minuteRotate + 'deg)';
    hrHand.style.transform = 'rotate(' + hourRotate + 'deg)';
}, 1000)