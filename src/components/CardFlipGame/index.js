import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import CardFlipRulesPopup from '../CardFlipRulesPopup'
import CardflipResultView from '../CardFlipGameResultPage'
import './index.css'

const cardsData = [
  {
    id: uuidv4(),
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: uuidv4(),
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: uuidv4(),
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: uuidv4(),
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: uuidv4(),
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: uuidv4(),
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: uuidv4(),
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: uuidv4(),
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: uuidv4(),
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: uuidv4(),
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    id: uuidv4(),
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: uuidv4(),
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: uuidv4(),
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: uuidv4(),
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: uuidv4(),
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: uuidv4(),
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: uuidv4(),
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: uuidv4(),
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: uuidv4(),
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: uuidv4(),
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class MemoryGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: cardsData.sort(() => Math.random() - 0.5),
      selectedCards: [],
      timer: 120,
      cardsCount: 0,
      lowestCardsCount: 0,
      score: 0,
      isGameover: false,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.timerFunction, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({isGameover: !prevState.isGameover}))
    this.setState({
      cards: cardsData.sort(() => Math.random() - 0.5),
      score: 0,
      timer: 120,
      cardsCount: 0,
      selectedCards: [],
    })
    this.componentDidMount()
  }

  timerFunction = () => {
    const {isGameover, timer, score} = this.state
    if (timer === 0 || score === 10) {
      clearInterval(this.timerId)
      this.setState({isGameover: true})
    } else if (isGameover === false) {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  handleCardClick = card => {
    const {selectedCards, cards} = this.state
    if (selectedCards.length < 2 && !card.flipped) {
      const updatedCards = cards.map(c =>
        c.id === card.id ? {...c, flipped: true} : c,
      )
      this.setState(
        {
          selectedCards: [...selectedCards, card],
          cards: updatedCards,
        },
        this.checkForMatch,
      )
    }
  }

  checkForMatch = () => {
    const {selectedCards} = this.state
    if (selectedCards.length === 2) {
      if (selectedCards[0].name === selectedCards[1].name) {
        setTimeout(this.removeMatchedCards, 1000)
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState(prevState => ({
          cardsCount: prevState.cardsCount + 1,
        }))
      } else {
        setTimeout(this.resetSelectedCards, 1000)
      }
    }
  }

  removeMatchedCards = () => {
    const {cards, selectedCards} = this.state
    const updatedCards = cards.map(card =>
      selectedCards.find(c => c.id === card.id)
        ? {...card, flipped: true, matched: true}
        : card,
    )
    this.setState({
      cards: updatedCards,
      selectedCards: [],
    })
  }

  resetSelectedCards = () => {
    const {cards, selectedCards} = this.state
    const updatedCards = cards.map(card =>
      selectedCards.find(c => c.id === card.id)
        ? {...card, flipped: false}
        : card,
    )
    this.setState({cards: updatedCards, selectedCards: []})
  }

  renderGameView = () => {
    const {cards, lowestCardsCount} = this.state
    const {score, timer, cardsCount} = this.state
    console.log(cards.length)
    console.log(cards)
    return (
      <div className="cardflip-play-bg">
        <div className="buttons-container">
          <Link to="/">
            <button className="cardflip-back-btn" type="button">
              <BiArrowBack color="#ffffff" />
              <p>back</p>
            </button>
          </Link>
          <CardFlipRulesPopup />
        </div>
        <h1 className="cardflip-game-heading">Card-Flip Memory Game</h1>
        <p className="timer">{timer}</p>
        <div className="sm-score-container-1">
          <p className="sm-sub-headings">
            Lowest Flip Count: {lowestCardsCount}
          </p>
          <p className="sm-timer">{timer}</p>
        </div>
        <div className="sm-score-container-1">
          <p className="sm-sub-headings">Card Flip Count: {cardsCount}</p>
          <p className="sm-sub-headings">Score: {score}</p>
        </div>
        <div className="cardflips-score-container">
          <p className="sub-headings">Card Flip Count: {cardsCount}</p>
          <p className="sub-headings">Lowest Flip Count: {lowestCardsCount}</p>
          <p className="sub-headings">Score: {score}</p>
        </div>
        <div className="cards-container-bg">
          {cards.map(card => (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              className={`card ${card.flipped ? 'flipped' : ''} ${
                card.matched ? 'matched' : ''
              }`}
              onClick={() => this.handleCardClick(card)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710310711/foot-print_20_kjadd2.png"
                    className="footprint-img"
                    alt="footprint"
                  />
                </div>
                <div className="card-back">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="animal-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isGameover, cardsCount, score} = this.state

    return isGameover ? (
      <CardflipResultView
        score={score}
        cardsCount={cardsCount}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    ) : (
      this.renderGameView()
    )
  }
}

export default MemoryGame
