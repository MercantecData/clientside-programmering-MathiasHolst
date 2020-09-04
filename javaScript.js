
//var url = "https://api.openweathermap.org/data/2.5/weather?lat=56.452027&lon=9.396347&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric";

function closeTab(){
    window.close()
}

function getTempFromCity1(){
    var str = document.getElementById("text").value
    //var url = `https://api.openweathermap.org/data/2.5/weather?q=${str}&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric`
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${str}&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric` 
    //$("#demo").text("Denne by kunne ikke findes")
    var promise = fetch(url)
    var promise2 = promise.then(v=>v.json())
    promise2.then(v=>document.getElementById("content1").innerHTML = (`${v.list[0].main.temp} Grader i ${str} men det foeles som ${v.list[0].main.feels_like} og fugtiheds procenten ligger paa ${v.list[0].main.humidity}%`))   
    
    promise2.then(v=>document.getElementById("content2").innerHTML = (`${v.list[1].main.temp} Grader i ${str} men det foeles som ${v.list[1].main.feels_like}`))  
    //$("#arrow1").rotate(90);
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