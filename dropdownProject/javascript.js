function callCity(name, funFact, picAddress){
    document.getElementById("overskrift").innerHTML = (`${name}`)
    document.getElementById("beskrivelse").innerHTML = (`${funFact}`)
    document.getElementById("billede1").src= picAddress
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=41bfac970ccb62f946ceb789cef8bb08&units=metric` 
    var promise = fetch(url)
    var promise2 = promise.then(v=>v.json())
    promise2.then(v=>document.getElementById("weather").innerHTML = (`${v.main.temp} Grader i ${v.name} lige nu`))
}

function callPersonOrGame(name, funFact, picAddress, linkToWebsite){
    document.getElementById("overskrift").innerHTML = (`${name}`)
    document.getElementById("beskrivelse").innerHTML = (`${funFact}`)
    document.getElementById("billede1").src=picAddress
    document.getElementById("website").href = linkToWebsite
    document.getElementById("weather").innerHTML = (``)
}
