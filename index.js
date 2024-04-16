fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((data) => displayGames(data))

function displayGames(gameArr) {

  const imgContainer = document.querySelector('#game-image-container')

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

      const urlBtn = document.createElement('button')
      urlBtn.textContent = 'PLAY NOW'
      urlBtn.addEventListener('click', () => {
        window.location.href = gameObj.url
      })
      card.appendChild(urlBtn)

      const likeBtn = document.createElement('button')
      likeBtn.textContent = 'Like 💸'
      likeBtn.addEventListener('click', () => {
        gameObj.likes ++
        updateLikes(card, gameObj.likes)
      })
      card.appendChild(likeBtn)

      const moreLikes = document.createElement('span')
      moreLikes.textContent = `Likes: ${gameObj.likes}`
      card.appendChild(moreLikes)
      
      imgContainer.appendChild(card)
    })

    const dropDown = document.querySelector('#game-dropdown')
    dropDown.addEventListener('change', (e) => {
      const selectedLetter = e.target.value.toLowerCase()
      filterGames(gameArr, selectedLetter)
    })
  }
  
  function filterGames(gameArr, selectedLetter) {

    const gameListContainer = document.querySelector('#game-list')
    gameListContainer.innerHTML = ''
    
    gameArr.forEach((gameObj) => {

      if (gameObj.type.toLowerCase().startsWith(selectedLetter)) {
        const li = document.createElement('li')
        li.textContent = gameObj.type
        gameListContainer.appendChild(li)
      }
    })
  
    gameArr.forEach((gameObj) => {

        const card = imgContainer.querySelector(`[data-type="${gameObj.type}"]`)
        if (card) {
          if (gameObj.type.toLowerCase().startsWith(selectedLetter)) {
          card.style.display = 'block'
        } 
        else {
          card.style.display = 'none'
        }
      }
      })
    }

    function updateLikes(card, likes) {
      
      const moreLikes = card.querySelector('span')
      moreLikes.textContent = `Likes: ${likes}`
    }
  

