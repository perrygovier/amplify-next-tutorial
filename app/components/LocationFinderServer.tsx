export default async function LocationFinderServer() {

  const response = await fetch('https://apip.cc/json');
  const locationData = await response.json();
  console.log(locationData);
  console.log("hello")
  const locationInfo = locationData;


  return (
    <>
      <h1>Hello from {locationInfo?.City} - server component</h1>
    </>
  )

}