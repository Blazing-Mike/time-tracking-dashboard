//for (btn of buttons)
const weeklyBtn = document.querySelector('.weeklybtn');
const dailyBtn = document.querySelector('.dailybtn');
const monthlyBtn = document.querySelector('.monthlybtn');
const weeklyItems = document.querySelectorAll('.weekly');
const dailyItems = document.querySelectorAll('.daily');
const monthlyItems = document.querySelectorAll(".monthly");
var i;

function dailyHours() {
    for (var i = 0; i < dailyItems.length, i < weeklyItems.length, i < monthlyItems.length; i++) {
        dailyItems[i].style.display = 'flex';
        weeklyItems[i].style.display = 'none';
        monthlyItems[i].style.display = 'none';
    }
    dailyBtn.classList.add('active-btn');
    weeklyBtn.classList.remove('active-btn');
    monthlyBtn.classList.remove('active-btn');
}


function weeklyHours() {
    for (var i = 0; i < dailyItems.length, i < weeklyItems.length; i++) {
        weeklyItems[i].style.display = 'flex';
        monthlyItems[i].style.display = 'none';
        dailyItems[i].style.display = 'none';
    }

    weeklyBtn.classList.add('active-btn');
    dailyBtn.classList.remove('active-btn');
    monthlyBtn.classList.remove('active-btn');
}


function monthlyHours() {
    for (var i = 0; i < dailyItems.length, i < weeklyItems.length; i++) {
        weeklyItems[i].style.display = 'none';
        monthlyItems[i].style.display = 'flex';
        dailyItems[i].style.display = 'none';
    }
    monthlyBtn.classList.add('active-btn');
    dailyBtn.classList.remove('active-btn');
    weeklyBtn.classList.remove('active-btn');

}



function addActive(button) {
    button.classList.add('.active-btn')
}

dailyBtn.addEventListener('click', dailyHours);
weeklyBtn.addEventListener('click', weeklyHours);
monthlyBtn.addEventListener('click', monthlyHours);