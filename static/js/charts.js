function init() {

    let selectButton = d3.select("#selDataset");
    
    d3.json(url).then(function(data) {
        // console.log(data);
        
        let locations = [];
        for( let i = 0; i < data.length; i++) {
            let country = data[i].location;
            locations.push(country);
        }
        
        countries = listUnique(locations.sort())
        // console.log(countries)

        countries.forEach(function (data) {
            selectButton.append("option").attr("value",data).text(data);
        });
        
        let selectedCountry = countries[0];
        // console.log(selectedCountry);

        covidCharts(selectedCountry);
        totalDeaths(selectedCountry);
        // totalTests(selectedCountry);
        // totalVaccinations(selectedCountry);
    });
}

function covidCharts(inputCountry) {

    d3.json(url).then(function(data) {

        let filteredData = data.filter(country => country.location === inputCountry)
        // console.log(filteredData)

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let x_date = [];
        let y_cases = [];
        let y_deaths = [];
        let y_tests = [];
        let y_vax = []
        for( let i = 0; i < filteredData.length; i++) {
            let date = new Date(filteredData[i].date);
            let getYear = date.getFullYear();
            let getMonth = monthNames[date.getMonth()];
            let getDate = getMonth + "-" + getYear;
            x_date.push(getDate);

            let cases = filteredData[i].total_cases
            y_cases.push(cases);

            let deaths = filteredData[i].total_deaths
            y_deaths.push(deaths);

            let tests = filteredData[i].total_tests
            y_tests.push(tests);

            let vax = filteredData[i].total_vaccinations
            y_vax.push(vax);
        }
        // console.log(x_date)
        // console.log(y_cases)

        let traceCases = {
            x: x_date,
            y: y_cases,
            xaxis: "x1",
            yaxis: "y1",
            mode: "lines+markers",
            name: "Total Cases",
            // line: {width: 2, color: '#b04553'}
        };

        let traceDeaths = {
            x: x_date,
            y: y_deaths,
            xaxis: "x2",
            yaxis: "y2",
            mode: "lines+markers",
            name: "Total Deaths",
            // line: {width: 2, color: '#b04553'}
        };

        let traceTests = {
            x: x_date,
            y: y_tests,
            xaxis: "x3",
            yaxis: "y3",
            mode: "lines+markers",
            name: "Total Tests",
            // line: {width: 2, color: '#b04553'}
        };

        let traceVax = {
            x: x_date,
            y: y_vax,
            xaxis: "x4",
            yaxis: "y4",
            mode: "lines+markers",
            name: "Total Vaccinations",
            // line: {width: 2, color: '#b04553'}
        };

        let traceData = [traceCases, traceDeaths, traceTests, traceVax];

        let layout = {
            automargin: true,
            title: "Covid Data Analysis Chart",
            showlegend: true,
            grid: {rows: 2, columns: 2, pattern: 'independent'},
            // vertical_spacing: 3
        };

        Plotly.newPlot("charts", traceData, layout);
    });
}


function totalDeaths(inputCountry) {
    d3.json(url).then(function(data) {
        let filteredData = data.filter(country => country.location === inputCountry)

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let x_date = [];
    let y_deaths = [];
    for( let i = 0; i < filteredData.length; i++) {
        let date = new Date(filteredData[i].date);
        let getYear = date.getFullYear();
        let getMonth = monthNames[date.getMonth()];
        let getDate = getMonth + "-" + getYear;
        x_date.push(getDate);

        let deaths = filteredData[i].total_deaths
        y_deaths.push(deaths);
    }

    let traceDeaths = {
        x: x_date,
        y: y_deaths,
        mode: "lines+markers",
        name: "Total Deaths",
        // line: {width: 2, color: '#b04553'}
    };

    let traceData = [traceDeaths];

    let layout = {
            automargin: true,
            title: "Covid Data - Death Analysis Chart",
            showlegend: false,
    };

    Plotly.newPlot("deaths", traceData, layout);
    });
    
}


function totalTests(inputCountry) {

}


function totalVaccinations(inputCountry) {

}

function listUnique(data) {
    let unique = [];
    for(let i = 0; i < data.length; i++) {
        if(unique.includes(data[i]) === false) {
            unique.push(data[i])
        }
    }
    return unique
}

d3.selectAll("#selDataset").on("change", optionChanged)

function optionChanged() {

    let selectButton = d3.select("#selDataset");
    let newCountry = selectButton.property("value");
    // console.log(newCountry);

    covidCharts(newCountry);
    totalDeaths(newCountry)
    // bubbleChart(newID);
    // demoInfo(newID);
}

init();