
console.log("wow");

let selectedTd;

document.getElementById("et").onclick = function(event) {
    let target = event.target;

    if(target.tagName != 'TD' && target.tagName != 'TR' && target.tagName != "DIV") return;

    console.log(target);
};

function highlight(td) {
    if(selectedTd) {
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight');
}
    //$tuple[2].style.backgroundColor = "black";


