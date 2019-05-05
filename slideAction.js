let farLeft = 0;
let midLeft = 1;
let centralFirst = 2;
let centralSecond = 3;
let centralThird = 4;
let midRight = 5;
let farRight = 6;

let styleArr = [];
let trigger = true;

let sliderParent = document.querySelector('.sliderParent');
let sliderChildren = document.querySelectorAll('.sliderParent>div');

document.addEventListener('load', doStuff());
window.addEventListener('resize', doStuff);

function doStuff() {
    makeStyleArr();
    applyInitialStyles();
}

function makeStyleArr() {
    styleArr = [
        `width:10%;height:150px;z-index:8;left:${sliderParent.clientWidth * .05}px;top:${(sliderParent.clientHeight - sliderChildren[0].clientHeight)/2}px`,

        `width:15%;height:200px;z-index:9;left:${sliderParent.clientWidth * .1}px;top:${(sliderParent.clientHeight - sliderChildren[1].clientHeight)/2}px`,

        `width:20%;height:250px;z-index:10;background-color:red;left:${sliderParent.clientWidth * .15}px;top:${(sliderParent.clientHeight - sliderChildren[2].clientHeight)/2}px`,

        `width:20%;height:250px;z-index:10;background-color:green;left:${sliderParent.clientWidth * .4}px;top:${(sliderParent.clientHeight - sliderChildren[3].clientHeight)/2}px`,

        `width:20%;height:250px;z-index:10;background-color:yellow;left:${sliderParent.clientWidth * .65}px;top:${(sliderParent.clientHeight - sliderChildren[3].clientHeight)/2}px`,

        `width:15%;height:200px;z-index:9;left:${sliderParent.clientWidth * .75}px;top:${(sliderParent.clientHeight - sliderChildren[5].clientHeight)/2}px`,

        `width:10%;height:150px;z-index:8;left:${sliderParent.clientWidth * .85}px;top:${(sliderParent.clientHeight - sliderChildren[6].clientHeight)/2}px`
    ]
}

function applyInitialStyles() {
    for (var i = 0; i < sliderChildren.length; i++) {
        sliderChildren[i].style = styleArr[i];
    }
}

let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');

leftBtn.addEventListener('click', revealLeftSide);

function revealLeftSide() {
    if (trigger) {
        for (var item of sliderChildren) {
            item.classList.remove(item.classList[0]);
        }
        trigger = false;
    }

    let bucket = farLeft;
    farLeft = farRight;
    farRight = midRight;
    midRight = centralThird;
    centralThird = centralSecond;
    centralSecond = centralFirst;
    centralFirst = midLeft;
    midLeft = bucket;

    sliderChildren[farLeft].style = styleArr[0];
    sliderChildren[midLeft].style = styleArr[1];
    sliderChildren[centralFirst].style = styleArr[2];
    sliderChildren[centralSecond].style = styleArr[3];
    sliderChildren[centralThird].style = styleArr[4];
    sliderChildren[midRight].style = styleArr[5];
    sliderChildren[farRight].style = styleArr[6];
}

rightBtn.addEventListener('click', revealRightSide);

function revealRightSide() {
    if (trigger) {
        for (var item of sliderChildren) {
            item.classList.remove(item.classList[0]);
        }
        trigger = false;
    }

    let bucket = farRight;
    farRight = farLeft;
    farLeft = midLeft;
    midLeft = centralFirst;
    centralFirst = centralSecond;
    centralSecond = centralThird;
    centralThird = midRight;
    midRight = bucket;

    sliderChildren[farLeft].style = styleArr[0];
    sliderChildren[midLeft].style = styleArr[1];
    sliderChildren[centralFirst].style = styleArr[2];
    sliderChildren[centralSecond].style = styleArr[3];
    sliderChildren[centralThird].style = styleArr[4];
    sliderChildren[midRight].style = styleArr[5];
    sliderChildren[farRight].style = styleArr[6];
}