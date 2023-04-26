document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'aceSpades',
            img: 'images/card-AceSpades.png'
        },
        {

            name: 'aceSpades',
            img: 'images/card-AceSpades.png'
        },
        {
            name: 'jackClubs',
            img: 'images/card-JackClubs.png'
        },
        {
            name: 'jackClubs',
            img: 'images/card-JackClubs.png'
        },
        {
            name: 'kingHearts',
            img: 'images/card-KingHearts.png'
        },
        {
            name: 'kingHearts',
            img: 'images/card-KingHearts.png'
        },
        {
            name: 'queenDiamonds',
            img: 'images/card-QueenDiamonds.png'
        },
        {
            name: 'queenDiamonds',
            img: 'images/card-QueenDiamonds.png'
        }

    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    //Creating Gameboard
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card-back-Blue.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }


    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/AceSpades.png')
            cards[optionTwoId].setAttribute('src', 'images/AceSpades.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/card-back-Blue.png')
            cards[optionTwoId].setAttribute('src', 'images/card-back-Blue.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = '  Congragulations! You found them all!'
        }

        
    }
  


    //flip card
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) [
            setTimeout(checkForMatch, 500)
        ]
    }
    createBoard()

})