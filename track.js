var outputstr = ''
var sequence = 0

document.addEventListener('touchstart', touchSatrtFunc);


Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
}

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
        var timenow = new Date().Format("yyyy-MM-dd hh:mm:ss");
        timenow += ".txt"
        var content = outputstr;
        var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        saveAs(blob, timenow);//saveAs(blob,filename)
});
