var tpom = 25
var tpausa = 5
var tlong = 10
var cpom = 4
var meta = 10

var textc = document.getElementById('timer')
function menu(m){
    if (m == true){
    document.getElementById('menu').style.display ='block'

}else{
    document.getElementById('menu').style.display ='none'
    
}
}




//copiado

var button = document.querySelector('button');
var mostrador = document.querySelector('#mostrador');

button.addEventListener('click', function() {
    new Timer(1, mostrador, function() {
        alert('O tempo acabou!');
    }).start();
});

function Timer(mins, target, cb) {
    this.counter = mins * 60;
    this.target = target;
    this.callback = cb;
}
Timer.prototype.pad = function(s) {
    return (s < 10) ? '0' + s : s;
}
Timer.prototype.start = function(s) {
    this.count();
}
Timer.prototype.stop = function(s) {
    this.count();
}
Timer.prototype.done = function(s) {
    if (this.callback) this.callback();
}
Timer.prototype.display = function(s) {
    this.target.innerHTML = this.pad(s);
}
Timer.prototype.count = function(s) {
    var self = this;
    self.display.call(self, self.counter);
    self.counter--;
    var clock = setInterval(function() {
        self.display(self.counter);
        self.counter--;
        if (self.counter < 0) {
            clearInterval(clock);
            self.done.call(self);
        }
    }, 1000);
}


// var tpom = document.getElementById('tpom')
// tpom = Number(tpom)
// var tpausa= document.getElementById('tempint')
// var tlong = document.getElementById('templong')
// var cpom = document.getElementById('contpom')
// var meta = document.getElementById('meta')