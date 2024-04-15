fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((data) => displayGames(data))

function displayGames(gameArr) {

  const imgContainer = document.querySelector('#game-image-container')
  const gameListContainer = document.querySelector('#game-list')

  // Get game names 'titles' above each photo.

    gameArr.forEach((gameObj) => { 

      const card = document.createElement('div')
      card.classList.add('game-card')

      const type = document.createElement('p')
      type.textContent = gameObj.type
      card.appendChild(type)

      const name = document.createElement('h3')
      name.textContent = gameObj.name
      card.appendChild(name)

      const img = document.createElement('img')
      img.src = gameObj.image
      img.style.width = '250px'
      img.style.height = '200px'
      card.appendChild(img)

      imgContainer.appendChild(card)

      const li = document.createElement('li')
      li.textContent = gameObj.type
      gameListContainer.appendChild(li)
    })

const dropDown = document.querySelector('#game-dropdown')

 dropDown.addEventListener('change', (e) => handleSelectGame(e)) 

 function handleSelectGame(e) {

    gameListContainer.textContent = ""

  const filterGames = gameArr.filter((gameObj) => {
    return gameObj.type.charAt(0) === e.target.type.value
   })

  filterGames.forEach((gameObj) => {
     const li = document.createElement("li")
    li.textContent = gameObj.type
   gameContainer.appendChild(li)

  })
}
}

  
