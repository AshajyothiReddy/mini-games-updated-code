import './index.css'

const EmojiGameResult = props => {
  const {score, onClickPlayAgain} = props
  const gameStatus = score < 12 ? 'You Lose' : 'You Won'
  const resultEmojisImg =
    score < 12
      ? 'https://res.cloudinary.com/dv6ikqksk/image/upload/v1710140890/Image_1_m4odyu.png'
      : 'https://res.cloudinary.com/dv6ikqksk/image/upload/v1710140910/Image_n5ealb.png'

  const altValue = score < 12 ? 'lose' : 'won'

  return (
    <div className="result-view-bg">
      <div className="result-view-header">
        <div className="logo-part">
          <img
            src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710237234/wink_1_ipcfyz.png"
            className="logo-img"
            alt="emoji logo"
          />
          <p className="emoji-game-heading">Emoji Game</p>
        </div>
      </div>
      <div className="result-view-container">
        <div className="text-part">
          <p className="game-status">{gameStatus}</p>
          <p className="best-score">Best Score</p>
          <p className="score">{score}/12</p>
          <button
            type="button"
            className="play-again-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <img
          src={resultEmojisImg}
          alt={altValue}
          className="result-emojis-image"
        />
      </div>
    </div>
  )
}

export default EmojiGameResult
