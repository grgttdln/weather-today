export async function getWeather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77e711d55a7e413f2159c73d4fd3d0e1`)
    const data = await res.json()
    return data
}


export async function getHourlyForcast(lat, lon) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=77e711d55a7e413f2159c73d4fd3d0e1`)
    const data = await res.json()
    return data
}

