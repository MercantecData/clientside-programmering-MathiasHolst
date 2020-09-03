function start(){
$("p").text("Hello world!");
var str = new String("Hello World!");
//document.write(str.fontcolor("whitesmoke"))
//var url = "https://api.openweathermap.org/data/2.5/weather?lat=56.452027&lon=9.396347&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric";
var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric"
var promise = fetch(url)
var promise2 = promise.then(v=>v.json())
promise2.then(v=>console.log(v.main.temp))
}

function closeTab(){
    window.close()
}

function getTempFromCity1(){
    var str = document.getElementById("text").value
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${str}&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric` 
    //$("#demo").text("Denne by kunne ikke findes")
    var promise = fetch(url)
    var promise2 = promise.then(v=>v.json())
    promise2.then(v=>document.getElementById("content1").innerHTML = (`${v.main.temp} Grader i ${v.name} men det foeles som ${v.main.feels_like}`))   
}

function getTempFromCity2(){
    var str = document.getElementById("text2").value
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${str}&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric` 
    //$("#demo").text("Denne by kunne ikke findes")
    var promise = fetch(url)
    var promise2 = promise.then(v=>v.json())
    promise2.then(v=>document.getElementById("content2").innerHTML = (`${v.main.temp} Grader i ${v.name} men det foeles som ${v.main.feels_like}`))   
}

setInterval(getTempFromCity1, 60000);
setInterval(getTempFromCity2, 60000);