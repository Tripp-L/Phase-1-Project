fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((data) => displayGames(data))

function displayGames(gameArr) {
  const imgContainer = document.querySelector('#game-image-container')

  gameArr.forEach((gameObj) => { 
    if (!gameObj.likes) {
      gameObj.likes = 0 
    }

    const card = createGameCard(gameObj)
    imgContainer.appendChild(card)
  })

  const dropDown = document.querySelector('#game-dropdown')
  dropDown.addEventListener('change', (e) => {
    const selectedLetter = e.target.value.toLowerCase()
    filterGames(gameArr, selectedLetter)
  })

  const gameForm = document.querySelector('#gameForm')
  gameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newGame = collectFormData(gameForm)
    addNewGameToPage(newGame)
  })

  const reviewForm = document.querySelector('#Reviews')
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const reviewData = collectFormData(reviewForm)
    addReviewToPage(reviewData);
  })
}

function createGameCard(gameObj) {
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

  const urlBtn = createButton('PLAY NOW ▶️', 'play-btn')
  urlBtn.addEventListener('click', () => {
    window.location.href = gameObj.url
  })
  card.appendChild(urlBtn)

  const likeBtn = createButton('Like 🎰', 'like-btn')
  const likesCount = document.createElement('span')
  likesCount.textContent = `Likes 🎲: ${gameObj.likes}`
  likeBtn.addEventListener('click', () => {
    gameObj.likes++
    likesCount.textContent = `Likes: ${gameObj.likes}`
  })
  card.appendChild(likeBtn)
  card.appendChild(likesCount)

  return card
}

function createButton(text, className) {
  const button = document.createElement('button')
  button.textContent = text
  button.classList.add(className)
  return button
}

function collectFormData(form) {
  const formData = new FormData(form)
  const data = {}
  formData.forEach((value, key) => {
    data[key] = value
  })
  return data
}

function addNewGameToPage(game) {
  const imgContainer = document.querySelector('#game-image-container')

  const newGame = {
    name: game.gameName,
    type: game.gameType,
    image: game.gameImage,
    url: game.gameURL,
    likes: 0, 
  }

  const newCard = createGameCard(newGame)
  imgContainer.appendChild(newCard)
}

function addReviewToPage(reviewData) {
  const reviewsContainer = document.querySelector('#reviews-container')

  const reviewCard = createReviewCard(reviewData)
  reviewsContainer.appendChild(reviewCard)
}

function createReviewCard(reviewData) {
  const card = document.createElement('div')
  card.classList.add('review-card')

  const gameName = document.createElement('h3')
  gameName.textContent = `Game: ${reviewData.game}`
  card.appendChild(gameName)

  const rating = document.createElement('p')
  rating.textContent = `Rating: ${reviewData.rating}`
  card.appendChild(rating)

  const comment = document.createElement('p')
  comment.textContent = `Comment: ${reviewData.comment}`
  card.appendChild(comment)

  return card
}

function filterGames(gameArr, letter) {
  const filteredGames = gameArr.filter((game) => game.type.toLowerCase().startsWith(letter))
  displayFilteredGames(filteredGames)
}

function displayFilteredGames(filteredGames) {
  const gameList = document.querySelector('#game-list')
  gameList.innerHTML = '' // Clear the previous list

  filteredGames.forEach((game) => {
    const listItem = document.createElement('li')
    listItem.textContent = game.type
    gameList.appendChild(listItem)
  })
}