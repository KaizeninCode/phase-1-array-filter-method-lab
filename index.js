function findMatching(drivers, name) {
    // Convert name to lowercase
    const lowerCaseName = name.toLowerCase();
   
    // Filter the drivers array to get matching names
    const matchingDrivers = drivers.filter(driver => {
       // Convert driver name to lowercase
       const lowerCaseDriver = driver.toLowerCase();
   
       // Check if the driver name includes the search name
       return lowerCaseDriver.includes(lowerCaseName);
    });
   
    // Return the matching list of drivers
    return matchingDrivers;
   }

   function fuzzyMatch(drivers, name) {
    // Convert name to lowercase
    const lowerCaseName = name.toLowerCase();
   
    // Filter the drivers array to get matching names
    const matchingDrivers = drivers.filter(driver => {
       // Convert driver name to lowercase
       const lowerCaseDriver = driver.toLowerCase();
   
       // Check if the driver name starts with the search name
       return lowerCaseDriver.startsWith(lowerCaseName);
    });
   
    // Return the matching list of drivers
    return matchingDrivers;
   }

   function matchName(drivers, name) {
    // Convert name to lowercase
    const lowerCaseName = name.toLowerCase();
   
    // Filter the drivers array to get matching names
    const matchingDrivers = drivers.filter(driver => {
       // Convert driver name to lowercase
       const lowerCaseDriver = driver.name.toLowerCase();
   
       // Check if the driver name matches the search name
       return lowerCaseDriver === lowerCaseName;
    });
   
    // Return the matching list of drivers
    return matchingDrivers;
   }