fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((data) => displayGames(data))

function displayGames(gameArr) {
  const imgContainer = document.querySelector('#game-image-container')

  // Get game names'titles' above each photo.
  // Maybe create a container for each card ??

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
    })
}
  
