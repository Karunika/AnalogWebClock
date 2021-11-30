let numberWrapperList = document.querySelectorAll('.number-wrapper');
let numberList = document.querySelectorAll('.number');

numberWrapperList.forEach((number, index) => {
    number.style.transform = 'rotate(' + ( (90 * index) + 90 ) + 'deg)';
});
numberList.forEach((number, index) => {
    number.style.transform = 'rotate(' + ( (-90) * index - 90 ) + 'deg)';
});


var lineList = document.querySelectorAll('.line');
for(let i = 0, m = -1; i < lineList.length;){
    m++;
    if((i + 1) % 2 !== 0) m++;
    lineList[i].style.transform = 'rotate(' + m * 30 + 'deg)';
    i++;
};

// timing function
let currentDate = new Date();
let secHand = document.querySelector('.sec-hand');
let minHand = document.querySelector('.min-hand');
let hrHand = document.querySelector('.hr-hand');
let second, minute, hour, secondRotate, minuteRotate, hourRotate;

setInterval(() => {
    currentDate = new Date();
    second = currentDate.getSeconds();
    minute = currentDate.getMinutes();
    hour = currentDate.getHours();
    secondRotate = second * 6;
    minuteRotate = (minute * 6) + (second * 0.1);
    hourRotate = (hour * 30) + (minute * 0.5);
    secHand.style.transform = 'rotate(' + secondRotate + 'deg)';
    minHand.style.transform = 'rotate(' + minuteRotate + 'deg)';
    hrHand.style.transform = 'rotate(' + hourRotate + 'deg)';
}, 1000)