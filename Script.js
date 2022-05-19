document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGreen(){
    document.getElementsByTagName('body')[0].style.backgroundColor='green';
    document.getElementsByTagName('body')[0].style.color='white';
}
function switchBlue(){
    document.getElementsByTagName('body')[0].style.backgroundColor='blue';
    document.getElementsByTagName('body')[0].style.color='yellow';
}