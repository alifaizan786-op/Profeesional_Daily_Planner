var liveClockEl = $(".liveClockEl")
var saveButtonEl = $(".saveBtn")







setInterval(function(){
    var currenttime = moment().format("MMM Do, YYYY HH:mm:ss");
    liveClockEl.text (currenttime);
});


saveButtonEl.on('click', function(event){
    event.preventDefault()

})




var text9 = localStorage.getItem("9text")
$("#9text").text(text9)

var text10 = localStorage.getItem("10text")
$("#10text").text(text10)

var text11 = localStorage.getItem("11text")
$("#11text").text(text11)

var text12 = localStorage.getItem("12text")
$("#12text").text(text12)

var text13 = localStorage.getItem("13text")
$("#13text").text(text13)

var text14 = localStorage.getItem("14text")
$("#14text").text(text14)

var text15 = localStorage.getItem("15text")
$("#15text").text(text15)

var text16 = localStorage.getItem("16text")
$("#16text").text(text16)

var text17 = localStorage.getItem("17text")
$("#17text").text(text17)
