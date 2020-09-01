var str = new String("Hello World!");
document.write(str.fontcolor("whitesmoke"));

function closeTab(){
    window.close();
}

var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric";

var promise = fetch(url);
var promise2 = promise.then(v=>v.json());
promise2.then(v=>console.log(v.main.temp))
promise2.then(v=>alert(v.main.temp))
