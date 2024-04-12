import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import GameStatusItem from '../RPSgameStatus'
import Button from '../RPSbutton'
import RulesPopup from '../RPSrulesPopup'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RPSgame extends Component {
  state = {
    oponentImg: '',
    yourImg: '',
    score: 0,
    gameStatus: '',
    isGameStarted: false,
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameStarted: false,
    })
  }

  onClickButton = id => {
    const reqChoice = choicesList.find(each => each.id === id)
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentId = choicesList[randomIndex].id
    if (id === opponentId) {
      this.setState({
        gameStatus: 'IT IS DRAW',
      })
    } else if (id === 'ROCK' && opponentId === 'SCISSORS') {
      this.setState({
        gameStatus: 'YOU WON',
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (id === 'ROCK' && opponentId === 'PAPER') {
      this.setState({
        gameStatus: 'YOU LOSE',
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'PAPER' && opponentId === 'ROCK') {
      this.setState({
        gameStatus: 'YOU WON',
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (id === 'PAPER' && opponentId === 'SCISSORS') {
      this.setState({
        gameStatus: 'YOU LOSE',
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'SCISSORS' && opponentId === 'ROCK') {
      this.setState({
        gameStatus: 'YOU LOSE',
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'SCISSORS' && opponentId === 'PAPER') {
      this.setState({
        gameStatus: 'YOU WON',
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    }

    this.setState({
      yourImg: reqChoice.imageUrl,
      oponentImg: choicesList[randomIndex].imageUrl,
      isGameStarted: true,
    })
  }

  renderHome = () => (
    <div className="rps-bg-container">
      <div className="buttons-container">
        <Link to="/">
          <button className="back-btn" type="button">
            <BiArrowBack color="#ffffff" />
            <p>Back</p>
          </button>
        </Link>
        <RulesPopup />
      </div>
      <h1 className="game-heading">ROCK PAPER SCISSOR</h1>
      <h1 className="game-heading">Let&apos;s pick</h1>
      <ul className="images-container">
        {choicesList.map(each => (
          <Button
            key={each.id}
            buttonDetails={each}
            onClickButton={this.onClickButton}
          />
        ))}
      </ul>
    </div>
  )

  renderGameStatus = () => {
    const {score, yourImg, oponentImg, gameStatus} = this.state

    return (
      <GameStatusItem
        yourImg={yourImg}
        oponentImg={oponentImg}
        gameStatus={gameStatus}
        score={score}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  render() {
    const {isGameStarted} = this.state

    return isGameStarted ? this.renderGameStatus() : this.renderHome()
  }
}

export default RPSgame
