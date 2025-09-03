
if (!Array.isArray(data)) {
    console.error("Input data is not an array. Please provide a valid array.");
    return []; // Return an empty array if data is invalid.
  }

  // The .filter() method creates a new array with all elements
  // that pass the test implemented by the provided function.
  const filteredData = data.filter(city => {
    // This is the condition: it returns 'true' only for cities
    // where the population is less than 5,312,000.
    return city.population < 5312000;
  });

  // Return the new array containing only the filtered results.
  return filteredData;
