console.log('Comfirmados: ', data.confirmed.value);
console.log('Recuperados: ', data.recovered.value);
console.log('Muertos: ', data.deaths.value);
console.log('Muertos: ', data.lastUpdate.toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));
let dateObj = new Date()
console.log(dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
}));

axios.get('https://corona-api.com/timeline')
    .then(resp => {
        let data = resp.data.data;
        console.log(data[0]);
        // resp.data.map(dt => {
        //     console.log(dt)
        // });
        res.send('e')
    })
    .catch(e => console.log('Trying get All Data', e));

let reck = {
    coordinates: {
        latitude: 0,
        longitude: 0
    },
    name: 'Isle of Man',
    code: 'IM',
    population: 75049,
    updated_at: '2020-04-13T03:07:53.285Z',
    today: {
        deaths: 0,
        confirmed: 0
    },
    latest_data: {
        deaths: 2,
        confirmed: 228,
        recovered: 112,
        critical: 11,
        calculated: [Object]
    }
}

let jack = {
    updated_at: '2020-04-13T03:11:37.502Z',
    date: '2020-04-13',
    deaths: 114067,
    confirmed: 1845341,
    recovered: 421228,
    active: 1310046,
    new_confirmed: 0,
    new_recovered: 243,
    new_deaths: 8,
    is_in_progress: true
}