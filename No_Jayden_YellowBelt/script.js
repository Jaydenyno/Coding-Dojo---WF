function alertContactUs() {
    alert('Contact us at 555-5555');
}

function pressBuyNumPlus(element) {
    var count = document.querySelector(element);
    count.innerText++;
}

function sortedBy(element) {
    var currentType =  document.querySelector('#current-type').innerText;
    var newType = document.querySelector(element).innerText;
    currentType = newType;
}