// VARIBLES/SELECTOR
const btnClickme = document.getElementById('btnClickme');
const cbxContry = document.getElementById('cbxContry');
const titleChart = document.getElementById('titleChart');
const divChart = document.getElementById('divChart');
const firtConfirmed = document.getElementById('firtConfirmed');
loadCountry();

// EVENTS LISTENER
cbxContry.addEventListener('change', generateChart);

// FUNCTIONS
function test() {
    alert('hello');
}

//
async function generateChart() {
    titleChart.innerHTML = cbxContry.options[cbxContry.selectedIndex].text;
    chart(cbxContry.options[cbxContry.selectedIndex].text);
    // alert(cbxContry.options[cbxContry.selectedIndex].text);
}

// TO GET COUNTRIES OF THE API
async function getCountries() {
    let countries = await fetch('https://pomber.github.io/covid19/timeseries.json');
    let countriesDB = await countries.json();
    // console.log(countryDB.Afghanistan);
    // countryDB.Afghanistan.map(e => console.log(e));
    let finalCountries = [];
    for (let country in countriesDB) {
        finalCountries.push(country)
    }
    // console.log(finalCountries);
    return finalCountries;
}

// TO LOAD SELECT(COMBOBOX)
async function loadCountry() {
    let countries = await getCountries();
    countries.map(country => {
        let option = document.createElement("option");
        option.value = country;
        option.innerHTML = country;
        cbxContry.appendChild(option);
    });
}

// DRAWING THE CHART
async function chart(country) {
    divChart.style.display = "";
    let countries = await fetch('https://pomber.github.io/covid19/timeseries.json');
    let countriesDB = await countries.json();
    // console.log(countriesDB[country]);
    let data1 = countriesDB[country];
    let days = [];
    let confirmed = [];
    let deaths = [];
    let recovered = [];
    data1.map(dat => {
        if (dat.confirmed > 0) {
            days.push(dat.date);
            deaths.push(dat.deaths);
            recovered.push(dat.recovered);
            confirmed.push(dat.confirmed);
        } else {

        }
    });
    firtConfirmed.innerHTML = `date of first confirmed patient: ${days[0]}`;
    // console.log(days);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: days,
            datasets: [{
                    label: '# of CONFIRMED',
                    data: confirmed,
                    fill: false,
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    borderWidth: 1
                },
                {
                    label: '# of RECOVERED',
                    data: recovered,
                    fill: false,
                    backgroundColor: 'rgba(31, 189, 49, 1)',
                    borderColor: 'rgba(31, 189, 49, 1)',
                    borderWidth: 1
                },
                {
                    label: '# of DEATHS',
                    data: deaths,
                    fill: false,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
    });
}