function getTemp(){
    place.innerHTML=cityname.value[0].toUpperCase()+(cityname.value).slice(1)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=6fa99e1f96f024f79970c5a3532b2ac6`).then(res=>res.json()).
    then(data=>showTemp(data))
    
}

function showTemp(data){
    let temp=Math.round(data.main.temp-273.15)
    let humidity=data.main.humidity
    let pressure=data.main.pressure
    id_sub.innerHTML=`Humidity :${humidity}% <br>Pressure :${pressure} mb`
    id_temp.innerHTML=`${temp} °C`
}

function currTime(){
    let date=new Date();
    let hrs=date.getHours()
    let min=date.getMinutes()
    let month=date.getMonth()
    let day=date.getDay()
    let daynum=date.getDate()

    var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    var weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let session="AM"
    if (hrs >12){
        hrs=hrs-12;
        session="PM"
    }else{
        session="AM"
    }
    if(min<10){
        min=`0${min}`
    }
    let today=`${months[month]} ${daynum}, ${weeks[day]}`

    let time=`${hrs}:${min}  ${session}`
    times1.innerHTML=time
    todayDate.innerHTML=today
    let t=setTimeout(function(){currTime()},1000)
}
currTime();