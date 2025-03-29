export default async function LocationFinderServer() {

  const response = await fetch('https://apip.cc/json');
  const locationData = await response.json();
  console.log(locationData);
  const locationInfo = locationData;

  const response2 = await fetch(`https://www.7timer.info/bin/astro.php?lon=${locationInfo.Longitude}&lat=${locationInfo.Latitude}&ac=0&unit=metric&output=json&tzshift=0`)
  const weatherInfo = await response2.json();


  return (
    <>
      <h6 style={{'marginBottom':0}}>server component</h6>
      <h1 style={{'margin':0}}>Hello from {locationInfo?.City}</h1>
      <p style={{'marginTop':0}}>
        It is currently 
        &nbsp;<strong>{weatherInfo.dataseries[0].temp2m}</strong> 
        &nbsp;degrees celcius
      </p>
    </>
  )

}