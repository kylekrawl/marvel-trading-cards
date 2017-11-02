function StarWarsService() {
  var baseUrl = 'https://swapi.co/api/'

  var starWarsCharacters = [];
  var myCharacters = [];


  this.getStarWarsCharacters = function () {
    return JSON.parse(JSON.stringify(starWarsCharacters)) //can clone or will this break methods?
  }

  this.getMyCharacters = function () {
    return JSON.parse(JSON.stringify(myCharacters)) //can clone or will this break methods?
  }

  this.addToMyCharacters = function (id) {
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array
    for (i in starWarsCharacters) {
      var character = starWarsCharacters[i]
      if (starWarsCharacters[i].charId === id && !myCharacters.includes(starWarsCharacters[i])) { //replace `charId` with actual property name
        myCharacters.push(starWarsCharacters[i])
        starWarsCharacters.splice(starWarsCharacters.indexOf(character), 1)
      }
    }
    console.log(myCharacters)
  }

  this.removeMyCharacter = function (id) {
    //you need to find the character that you want to remove by its id
    //and remove it.
    for (i in myCharacters) {
      var character = myCharacters[i]
      if (myCharacters[i].charId === id) { //replace `charId` with actual property name
        starWarsCharacters.push(myCharacters[i])
        myCharacters.splice(myCharacters.indexOf(character), 1)
      }
    }
  }

  this.getCharacters = function (callWhenDone) {
    //Use &offset=Number to add pagination
    $.get(baseUrl + 'people', function (response) {
      starWarsCharacters = response.results;
      console.log(starWarsCharacters)
      callWhenDone(starWarsCharacters)
    })
  }

}
