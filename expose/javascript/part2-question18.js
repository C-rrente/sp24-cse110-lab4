let d = new Date();
let time = d.toLocaleTimeString();

var interval = setInterval(callback, 1000);

function callback () {
    console.log(time);
}

