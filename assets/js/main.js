$( document ).ready(function() { 


var liveClockEl = $(".liveClockEl")
var saveButtonEl = $(".saveBtn")
var hourCheck = moment().format("HH")
var lsKey = ''
var lsVal = ''
var timeblockEl= $(".custrow").children().attr("id")
console.log(timeblockEl)
console.log(hourCheck)

// console.log(hourCheck)
// console.log($(".custrow").children().attr("id"))
// console.log($(".plannerEl").children().length)

setInterval(function(){
    var currenttime = moment().format("MMM Do, YYYY HH:mm:ss");
    liveClockEl.text (currenttime);
});

for (var i = 0; i < $(".custrow").length; i++) {
    if (hourCheck === timeblockEl ){
        $(".custrow").children().siblings(".custtext").children().attr("class", "bg-danger")
    }
    if (hourCheck > timeblockEl ){
        $(".custrow").children().siblings(".custtext").children().attr("class", "bg-secondary")
    }
    if (hourCheck < timeblockEl ){
        $(".custrow").children().siblings(".custtext").children().attr("class", "bg-success")
    }
}








saveButtonEl.on('click', function(){
    console.log(this.id)
    lsKey = $(this).parent().siblings('.custtext').children().attr("id")
    lsVal = $(this).parent().siblings('.custtext').children().val()
    localStorage.setItem(lsKey, lsVal)
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


})