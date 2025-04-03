// "use client"; // not needed here bc it is in the child <todo> element!

// Importing Components
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/LocationFinderServer";
import LocationFinderClient from "./components/LocationFinderClient";

import "./../app/app.css";



export default function App() {
  

  return (
    <main>
      
        <p>
          Note: The one from the client will flash, whereas the one on the server 
          is loaded with the rest of the site, making it load instantly.
        </p>

        {/* Server Component */}
        <LocationFinderServer />

        {/* Client Component */}
        <LocationFinderClient />




      <hr/>

      {/* Call the ToDo Componenet */}
      <ToDo />
    </main>
  );
}
