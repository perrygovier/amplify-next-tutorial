
// Import the Packages


export default async function locationFinderServer() { // maKE THIS A ASYNC FUNCTION


        // Getting Location Data
        const locationResponse = await fetch('https://apip.cc/json');
        const locationData = await locationResponse.json();
        console.log(locationData);
        const locationInfo = locationData;


        
            
        // Getting Weather Data
        // Create the API URL
        const url = "https://www.7timer.info/bin/astro.php?lon="
            + locationData.Longitude
            + "&lat="
            + locationData.Latitude
            + "&ac=0&unit=metric&output=json&tzshift=0";

        // Call the API
        const weatherResponse = await fetch(url);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);

        const weatherInfo = weatherData;

        

    return (
        <>

            <h1>Location Finder (Server)</h1>
            <ul>
                <li>
                    Region Data:
                    <ul>
                        <li>{locationInfo?.City}, {locationInfo?.RegionName}</li>
                        <li>{locationInfo?.CountryName}</li>
                    </ul>
                </li>
                <li>
                    Weather Data:
                    <ul>
                        <li>Temperature: {weatherInfo?.dataseries[0].temp2m}° C</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}