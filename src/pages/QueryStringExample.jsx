// src/pages/QueryStringExample.jsx

import { useSearchParams } from 'react-router-dom';

function QueryStringExample () {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the values from the URL query strings
  // Example: http://localhost:5173/example?place=Miami&destType=Hotel
  const place = searchParams.get("place");
  const destType = searchParams.get("destType");
  const hotel = searchParams.get("hotel");

  console.log("place", place);
  console.log("destType", destType);
  console.log("hotel", hotel);


  return (
    <div>
      <h2>Query String Example</h2>
      <p>Open the console to see the logged query string values</p>
    </div>
  );
}

export default QueryStringExample;
