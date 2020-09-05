var city = document.querySelector('.city');
var button = document.querySelector('.button');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=a60270383c57950409ad97bd87a4d747')
        .then(response => response.json())
        .then(data => {
            namevalue = data['name'];
            tempvalue = data['main']['temp'];
            descvalue = data['weather'][0]['description'];

            name.innerHTML = namevalue;
            temp.innerHTML = tempvalue;
            desc.innerHTML = descvalue;
        })

        .catch(err => alert("wrong city name"))
        
})


//service worker registration
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service_worker.js").then(registration => {
        console.log("Service worker registered");
        console.log(registration);
    })
}