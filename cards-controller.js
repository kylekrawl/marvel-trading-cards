function CardsController() {
  var starWarsService = new StarWarsService()

  this.add = function add(id) {
    starWarsService.addToMyCharacters(id)
    updateMyCharacters(starWarsService.getMyCharacters())
    updateStarWars(starWarsService.getStarWarsCharacters())
  }

  this.remove = function remove(id) {
    starWarsService.removeMyCharacter(id)
    updateMyCharacters(starWarsService.getMyCharacters())
    updateStarWars(starWarsService.getStarWarsCharacters())
  }

  starWarsService.getCharacters(ready)

 
  function ready(data) {

    updateStarWars(data)

  }

  function updateStarWars(list) {
    var elem = document.getElementById('star-wars-characters')
    elem.innerHTML = ''
    var starWarsTemplate = ''
    for (var i in list) {
      var character = list[i];
      character.charId = `${character.height}${character.mass}`
      console.log(character)
      starWarsTemplate += `
      <div class="col-sm-3 text-center">
        <img src="https://robohash.org/${character.name}?set=set4" width="100">
        <h3>${character.name}</h3>
          <div>
            <button class="btn-success" id="${character.charId}" onclick="app.controllers.cardsController.add('${character.charId}')">Add to Team</button>
          </div>
      </div>
      `
      elem.innerHTML = starWarsTemplate
    }

  }

  function updateMyCharacters(list) {
    var elem = document.getElementById('my-characters')
    elem.innerHTML = ''
    var starWarsTemplate = ''
    for (var i in list) {
      var character = list[i];
      console.log(character)
      starWarsTemplate += `
      <div class="col-sm-3 text-center">
        <img src="https://robohash.org/${character.name}?set=set4" width="100">
        <h3>${character.name}</h3>
          <div>
            <button class="btn-danger" id="${character.charId}" onclick="app.controllers.cardsController.remove('${character.charId}')">Remove from Team</button>
          </div>
      </div>
      `
      elem.innerHTML = starWarsTemplate
    }

  }

}
