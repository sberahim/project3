const chartCountries = [
    "Australia",
    "France",
    "Philippines",
    "India",
    "China",
    "Dubai",
    "South Africa",
    "Malaysia",
    "Brazil",
    "Spain"
]

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
        // // console.log(selectedCountry);

        covidCharts(selectedCountry);
        totalCases();
        totalDeaths();
        totalTests();
        totalVax();
    });
}

function totalCases() {
    d3.json(url).then(function(data) {
        
        function checkCountry(country) {
            let filteredData =[]
            for (let i = 0; i<chartCountries.length; i++) {
                filteredData.push(data.filter(country => country.location === chartCountries[i]))
            }
            return filteredData
        }
        
        let selectedCountries = checkCountry(data)
        // console.log(selectedCountries)

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        let traceCases = [];
        for( let i = 0; i < selectedCountries.length; i++) {
            let x_date = [];
            let y_cases = [];
            let names = []

            for( let j =0; j < selectedCountries[i].length; j++) {
                let date = new Date(selectedCountries[i][j].date);
                let getYear = date.getFullYear();
                let getMonth = monthNames[date.getMonth()];
                let getDate = getMonth + "-" + getYear;
                x_date.push(getDate);                             
        
                let cases = selectedCountries[i][j].total_cases
                y_cases.push(cases);  
                    
                let name = selectedCountries[i][j].location
                names.push(name)
            }

            let traceCase = {
                x: x_date,
                y: y_cases,
                mode: "lines+markers",
                name: names[0]
            }

            traceCases.push(traceCase);
        }
        
        // console.log(traceCases)
         let traceData = traceCases;

        let layout = {
            automargin: true,
            title: "Case Analysis Chart",
            xaxis: {tickangle: 45, tickfont:{size:8}},
            legend: {orientation: "h", y:10}
        };

        Plotly.newPlot("cases", traceData, layout);
    });    
}

function totalDeaths() {
    d3.json(url).then(function(data) {
        
        function checkCountry(country) {
            let filteredData =[]
            for (let i = 0; i<chartCountries.length; i++) {
                filteredData.push(data.filter(country => country.location === chartCountries[i]))
            }
            return filteredData
        }
        
        let selectedCountries = checkCountry(data)
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        let traceDeaths = [];
        for( let i = 0; i < selectedCountries.length; i++) {
            let x_date = [];
            let y_deaths = [];
            let names = []

            for( let j =0; j < selectedCountries[i].length; j++) {
                let date = new Date(selectedCountries[i][j].date);
                let getYear = date.getFullYear();
                let getMonth = monthNames[date.getMonth()];
                let getDate = getMonth + "-" + getYear;
                x_date.push(getDate);                             
        
                let deaths = selectedCountries[i][j].total_deaths
                y_deaths.push(deaths);  
                    
                let name = selectedCountries[i][j].location
                names.push(name)
            }

            let traceDeath = {
                x: x_date,
                y: y_deaths,
                mode: "lines+markers",
                name: names[0]
            }

            traceDeaths.push(traceDeath);
        }
    
        let traceData = traceDeaths;

        let layout = {
            automargin: true,
            title: "Death Analysis Chart",
            xaxis: {tickangle: 45, tickfont:{size:8}},
            legend: {orientation: "h", y:10}
        };

        Plotly.newPlot("deaths", traceData, layout);
    });   
}

function totalTests() {
    d3.json(url).then(function(data) {
        
        function checkCountry(country) {
            let filteredData =[]
            for (let i = 0; i<chartCountries.length; i++) {
                filteredData.push(data.filter(country => country.location === chartCountries[i]))
            }
            return filteredData
        }
        
        let selectedCountries = checkCountry(data)
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        let traceTests = [];
        for( let i = 0; i < selectedCountries.length; i++) {
            let x_date = [];
            let y_tests = [];
            let names = []

            for( let j =0; j < selectedCountries[i].length; j++) {
                let date = new Date(selectedCountries[i][j].date);
                let getYear = date.getFullYear();
                let getMonth = monthNames[date.getMonth()];
                let getDate = getMonth + "-" + getYear;
                x_date.push(getDate);                             
        
                let tests = selectedCountries[i][j].total_tests
                y_tests.push(tests);  
                    
                let name = selectedCountries[i][j].location
                names.push(name)
            }

            let traceTest = {
                x: x_date,
                y: y_tests,
                mode: "lines+markers",
                name: names[0]
            }

            traceTests.push(traceTest);
        }
    
        let traceData = traceTests;

        let layout = {
            automargin: true,
            title: "Test Analysis Chart",
            xaxis: {tickangle: 45, tickfont:{size:8}},
            legend: {orientation: "h", y:10}
        };

        Plotly.newPlot("tests", traceData, layout);
    });
}


function totalVax() {
    d3.json(url).then(function(data) {
        
        function checkCountry(country) {
            let filteredData =[]
            for (let i = 0; i<chartCountries.length; i++) {
                filteredData.push(data.filter(country => country.location === chartCountries[i]))
            }
            return filteredData
        }
        
        let selectedCountries = checkCountry(data)
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        let traceVaccs = [];
        for( let i = 0; i < selectedCountries.length; i++) {
            let x_date = [];
            let y_vax = [];
            let names = []

            for( let j =0; j < selectedCountries[i].length; j++) {
                let date = new Date(selectedCountries[i][j].date);
                let getYear = date.getFullYear();
                let getMonth = monthNames[date.getMonth()];
                let getDate = getMonth + "-" + getYear;
                x_date.push(getDate);                             
        
                let vax = selectedCountries[i][j].total_vaccinations
                y_vax.push(vax);  
                    
                let name = selectedCountries[i][j].location
                names.push(name)
            }

            let traceVac = {
                x: x_date,
                y: y_vax    ,
                mode: "lines+markers",
                name: names[0]
            }

            traceVaccs.push(traceVac);
        }
    
        let traceData = traceVaccs;

        let layout = {
            automargin: true,
            title: "Vaccination Analysis Chart",
            xaxis: {tickangle: 45, tickfont:{size:8}},
            legend: {orientation: "h", y:10}
        };

        Plotly.newPlot("vax", traceData, layout);
    });
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

    covidCharts(newCountry);
    // totalCases(newCountry);
    // totalDeaths(newCountry);
    // totalTests(newCountry);
    // totalVax(newCountry);
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
            xaxis: "x",
            yaxis: "y1",
            type: "bar",
            name: "Total Cases",
            // line: {width: 2, color: '#b04553'}
        };

        let traceDeaths = {
            x: x_date,
            y: y_deaths,
            xaxis: "x2",
            yaxis: "y2",
            type: "bar",
            name: "Total Deaths",
            // line: {width: 2, color: '#b04553'}
        };

        let traceTests = {
            x: x_date,
            y: y_tests,
            xaxis: "x3",
            yaxis: "y3",
            type: "bar",
            name: "Total Tests",
            // line: {width: 2, color: '#b04553'}
        };

        let traceVax = {
            x: x_date,
            y: y_vax,
            xaxis: "x4",
            yaxis: "y4",
            type: "bar",
            name: "Total Vaccinations",
            // line: {width: 2, color: '#b04553'}
        };

        let traceData = [traceCases, traceDeaths, traceTests, traceVax];

        let layout = {
            automargin: true,
            title: "Covid Data Charts",
            legend: {orientation: "h", xanchor: "center", x: 0.5, y:10},
            grid: {rows: 2, columns: 2, pattern: 'independent'},
            xaxis: {tickangle: 45, tickfont:{size:8}},
            xaxis2: {tickangle: 45, tickfont:{size:8}},
            xaxis3: {tickangle: 45, tickfont:{size:8}},
            xaxis4: {tickangle: 45, tickfont:{size:8}} 

        };

        Plotly.newPlot("charts", traceData, layout);
    });
}

init();