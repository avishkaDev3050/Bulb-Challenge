function fncOn() {
    document.getElementById('img').src = "Images/on.gif";
    document.getElementById('btn').style.backgroundColor = 'cyan';
    document.getElementById('btn').style.color = '#000000';
    document.getElementById('btn').style.fontWeight = 'bold';
    document.getElementById('btn1').style.backgroundColor = 'transparent';
    document.getElementById('btn1').style.color = '#ffffff';
    document.getElementById('btn1').style.fontWeight = 'bold';
}

function fncOff() {
    document.getElementById('img').src = "Images/off.gif";
    document.getElementById('btn1').style.backgroundColor = 'cyan';
    document.getElementById('btn1').style.color = '#000000';
    document.getElementById('btn1').style.fontWeight = 'bold';
    document.getElementById('btn').style.backgroundColor = 'transparent';
    document.getElementById('btn').style.color = '#ffffff';
    document.getElementById('btn').style.fontWeight = 'bold';
}