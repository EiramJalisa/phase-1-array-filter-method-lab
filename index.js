const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (takenArray, passedString) {
  return takenArray.filter(bobby => bobby.toLowerCase() === passedString.toLowerCase());
}

function fuzzyMatch(takenArrayV2, passedString){
  return takenArrayV2.filter(function(stringPiece) {
      if (stringPiece.slice(0, passedString.length) === passedString){
          return true;
  }
  })
}

function matchName(driversAndCities, passedString){
  return driversAndCities.filter(driverName => driverName.name === passedString)
}