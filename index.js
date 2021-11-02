console.log('loaded')

var btnIncrease = document.getElementById('btn-increase')
var btndecrease = document.getElementById('btn-decrease')
var heading = document.getElementById('heading')

var initialFontSize = window.getComputedStyle(heading).fontSize

initialFontSize = parseInt(initialFontSize.substr(0,(initialFontSize.length-2)))

btnIncrease.onclick = function(){
    initialFontSize += 5
    heading.style.fontSize = initialFontSize + 'px'
}
btndecrease.onclick = function(){
    initialFontSize -= 5
    heading.style.fontSize = initialFontSize + 'px'
}