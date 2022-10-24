var clickModal = document.getElementById('btnModal');
var frame = document.getElementById('frame');
var clickClose = document.getElementById('close');
var overlay = document.getElementById('overlay');

clickModal.onclick = function () {
    overlay.classList.add('state-show');
    frame.classList.add('state-appear');
}

clickClose.onclick = function () {
    overlay.classList.remove('state-show');
    frame.classList.remove('state-appear')

}
// khi click bất kì chỗ nào nằm ngoài cái frame thì sẽ thoát cái modal 
window.onclick = function (event) {
    // từ event này là bất kì ( any )
    if (event.target == frame) {
        overlay.classList.remove('state-show');
        frame.classList.remove('state-appear');
    }
}