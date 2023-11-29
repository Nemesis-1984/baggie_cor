// Таб №1
// слайдер №1
const img1 = document.querySelector('.slider__image1');
const dots1 = document.querySelectorAll('.slider__dot1');

const imgArr1 = ['./img/img1.png', './img/img2.png', './img/img3.png'];

let currentIndex1 = 0;

function changeIndex1(ind) {
    currentIndex1 = ind;
    slide1(currentIndex1);
}

function slide1(index) {
    img1.src = imgArr1[index];
    updateDots1(index);
}

function updateDots1(index) {
    for(let dot of dots1) {
        dot.classList.remove('active');
    }
    dots1[index].classList.add('active');
}

// слайдер №2
const img2 = document.querySelector('.slider__image2');
const dots2 = document.querySelectorAll('.slider__dot2');

const imgArr2 = ['./img/img2.png', './img/img3.png', './img/img1.png'];

let currentIndex2 = 0;

function changeIndex2(ind) {
    currentIndex2 = ind;
    slide2(currentIndex2);
}

function slide2(index) {
    img2.src = imgArr2[index];
    updateDots2(index);
}

function updateDots2(index) {
    for(let dot of dots2) {
        dot.classList.remove('active');
    }
    dots2[index].classList.add('active');
}

// слайдер №3
const img3 = document.querySelector('.slider__image3');
const dots3 = document.querySelectorAll('.slider__dot3');

const imgArr3 = ['./img/img3.png', './img/img2.png', './img/img1.png'];

let currentIndex3 = 0;

function changeIndex3(ind) {
    currentIndex3 = ind;
    slide3(currentIndex3);
}

function slide3(index) {
    img3.src = imgArr3[index];
    updateDots3(index);
}

function updateDots3(index) {
    for(let dot of dots3) {
        dot.classList.remove('active');
    }
    dots3[index].classList.add('active');
}

// слайдер №4
const img4 = document.querySelector('.slider__image4');
const dots4 = document.querySelectorAll('.slider__dot4');

const imgArr4 = ['./img/img4.png', './img/img3.png', './img/img2.png'];

let currentIndex4 = 0;

function changeIndex4(ind) {
    currentIndex4 = ind;
    slide4(currentIndex4);
}

function slide4(index) {
    img4.src = imgArr4[index];
    updateDots4(index);
}

function updateDots4(index) {
    for(let dot of dots4) {
        dot.classList.remove('active');
    }
    dots4[index].classList.add('active');
}

// Таб №2
// // слайдер №1
// const img11 = document.querySelector('.slider__image11');
// const dots11 = document.querySelectorAll('.slider__dot11');

// const imgArr11 = ['./img/img1.png', './img/img2.png', './img/img3.png'];

// let currentIndex11 = 0;

// function changeIndex11(ind) {
//     currentIndex11 = ind;
//     slide11(currentIndex11);
// }

// function slide11(index) {
//     img11.src = imgArr11[index];
//     updateDots11(index);
// }

// function updateDots11(index) {
//     for(let dot of dots11) {
//         dot.classList.remove('active');
//     }
//     dots11[index].classList.add('active');
// }

// // слайдер №2
// const img22 = document.querySelector('.slider__image22');
// const dots22 = document.querySelectorAll('.slider__dot22');

// const imgArr22 = ['./img/img2.png', './img/img3.png', './img/img1.png'];

// let currentIndex22 = 0;

// function changeIndex22(ind) {
//     currentIndex22 = ind;
//     slide22(currentIndex22);
// }

// function slide22(index) {
//     img22.src = imgArr22[index];
//     updateDots22(index);
// }

// function updateDots22(index) {
//     for(let dot of dots22) {
//         dot.classList.remove('active');
//     }
//     dots22[index].classList.add('active');
// }

// // слайдер №3
// const img33 = document.querySelector('.slider__image33');
// const dots33 = document.querySelectorAll('.slider__dot33');

// const imgArr33 = ['./img/img3.png', './img/img2.png', './img/img1.png'];

// let currentIndex33 = 0;

// function changeIndex33(ind) {
//     currentIndex33 = ind;
//     slide33(currentIndex33);
// }

// function slide33(index) {
//     img33.src = imgArr33[index];
//     updateDots33(index);
// }

// function updateDots33(index) {
//     for(let dot of dots33) {
//         dot.classList.remove('active');
//     }
//     dots33[index].classList.add('active');
// }

// // слайдер №4
// const img44 = document.querySelector('.slider__image44');
// const dots44 = document.querySelectorAll('.slider__dot44');

// const imgArr44 = ['./img/img4.png', './img/img3.png', './img/img2.png'];

// let currentIndex44 = 0;

// function changeIndex44(ind) {
//     currentIndex44 = ind;
//     slide44(currentIndex44);
// }

// function slide44(index) {
//     img44.src = imgArr44[index];
//     updateDots44(index);
// }

// function updateDots44(index) {
//     for(let dot of dots44) {
//         dot.classList.remove('active');
//     }
//     dots44[index].classList.add('active');
// }


// Табы
const tabs = document.querySelectorAll('.tabhead__item');
const contents = document.querySelectorAll('.tabcontent__item');

tabs.forEach((tab, index) => {
    tab.onclick = () => {
        changeTab(index);
    };
});

// function changeTab(index) {
//     for(let tab of tabs) {
//         tab.classList.remove('active');
//     }
//     tabs[index].classList.add ('active');
//     for(let el of contents) {
//         el.classList.remove('active');
//     }
//     contents[index].classList.add('active');
// };

function changeTab(index) {
    setActiveClass(tabs, index);
    setActiveClass(contents, index);
};

function setActiveClass(arr, index) {
    for(let el of arr) {
        el.classList.remove('active');
    }
    arr[index].classList.add ('active');
};