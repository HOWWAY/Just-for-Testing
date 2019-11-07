var outputstr = ''
var sequence = 0

document.addEventListener('touchstart', touchSatrtFunc);

function touchSatrtFunc(evt) {
    try {

        var touch = evt.touches[0];
        var x = Number(touch.pageX);
        var y = Number(touch.pageY);

        startX = x;
        startY = y;


    } catch (e) {
        alert('touchSatrtFunc：' + e.message);
    }
    sequence = sequence + 1
    outputstr = outputstr + sequence + ',' + startX + ',' + startY + ' ' + '\r\n'
    console.log(outputstr)
}

$("#export").click(function(){
        console.log('click')
        var content = outputstr;
        var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "file.txt");//saveAs(blob,filename)
});
