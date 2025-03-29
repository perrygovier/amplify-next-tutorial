'use client';

import { useEffect, useState } from "react"

export default function LocationFinderServer() {
  const [locationInfo, setLocationInfo] = useState({City: 'N/A'});
  const [temperature, setTemperature] = useState('n/a');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({})

  const getLocationInfo = async () => {

      setLoading(true);
      const response = await fetch('https://apip.cc/json');
      const locationData = await response.json();
      console.log(locationData);
      setLocationInfo(locationData);

      const response2 = await fetch(`https://www.7timer.info/bin/astro.php?lon=${locationData.Longitude}&lat=${locationData.Latitude}&ac=0&unit=metric&output=json&tzshift=0`)
      const weatherData = await response2.json();
      setTemperature(weatherData?.dataseries[0]?.temp2m)
      setLoading(false);
  }

  useEffect(() => {
    getLocationInfo();
  }, [])

  return (
    <>
      <h6 style={{'marginBottom':0}}>server component</h6>
      {loading ? 'Loading...': (<>
        <h1 style={{'margin':0}}>Hello from {locationInfo?.City}</h1>
        <p style={{'marginTop':0}}>
          It is currently 
          &nbsp;<strong>{temperature}</strong> 
          &nbsp;degrees celcius
        </p>
      </>)}
      
    </>
  )

}