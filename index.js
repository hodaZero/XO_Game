let role = "x";
let boxes = [];
let head = document.getElementById("title");
function compareBoxes(number1, number2, number3) {
    head.innerHTML = `${boxes[number1].innerHTML} winer`;
    document.getElementById('item' + number1).style.background = '#080808dc';
    document.getElementById('item' + number2).style.background = '#000000dc';
    document.getElementById('item' + number3).style.background = '#000000dc';
    setInterval(function () { head.innerHTML = 'Game over' }, 1000);
    setTimeout(function () { location.reload(); }, 4000);
}
function compareData() {
    for (let i = 1; i < 10; i++) {
        boxes[i] = document.getElementById('item' + i);
    }
    if (boxes[1].innerHTML == boxes[2].innerHTML && boxes[2].innerHTML == boxes[3].innerHTML && boxes[1].innerHTML != "") {
        compareBoxes(1, 2, 3);
    }
    else if (boxes[4].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML ==boxes[6].innerHTML && boxes[4].innerHTML != "") {
        compareBoxes(4, 5, 6);

    }
    else if (boxes[7].innerHTML == boxes[8].innerHTML && boxes[8].innerHTML == boxes[9].innerHTML && boxes[7].innerHTML != "") {
        compareBoxes(7, 8, 9);
    }
    else if (boxes[1].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[9].innerHTML && boxes[5].innerHTML != "") {
        compareBoxes(1, 5, 9);
    }
    else if (boxes[3].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[7].innerHTML && boxes[3].innerHTML != "") {
        compareBoxes(3, 5, 7);
    }
    else if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != "") {
        compareBoxes(1, 4, 7);
    }
    else if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != "") {
        compareBoxes(2, 5, 8);
    }
    else if (boxes[3].innerHTML ==boxes[6].innerHTML &&boxes[6].innerHTML == boxes[9].innerHTML && boxes[3].innerHTML != "") {
        compareBoxes(3, 6, 9);
    }
}
function play(id) {
    let box = document.getElementById(id);
    if (role === "x" && box.innerHTML == "") {
        box.innerHTML = 'x';
        role = 'o';
        head.innerHTML = 'o';
    }
    else if (role === 'o' && box.innerHTML == '') {
        box.innerHTML = 'o';
        role = 'x';
        head.innerHTML = 'x';
    }
    compareData();
}