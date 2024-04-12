import './index.css'

const CardflipResultView = props => {
  const {score, cardsCount, onClickPlayAgain} = props
  const resEmojiImg =
    score < 10
      ? 'https://res.cloudinary.com/dv6ikqksk/image/upload/v1710321479/05_Pokerface_fuflif.png'
      : 'https://res.cloudinary.com/dv6ikqksk/image/upload/v1710321432/03_Optimistic_unob5o.png'
  const wishesText = score < 12 ? 'Better luck next time!' : 'Congratulations!'
  const feedback =
    score < 10
      ? 'You have not reached the score in time'
      : 'You have reached the score in time'

  return (
    <div className="cardflip-result-view-bg">
      <img src={resEmojiImg} alt="emoji" className="resEmojiImg" />
      <p className="wishes-text">{wishesText}</p>
      <p className="flips">No.of flips-{cardsCount}</p>
      <p className="desc">{feedback}</p>
      <button
        type="button"
        className="play-again-btn"
        onClick={onClickPlayAgain}
      >
        Play again
      </button>
    </div>
  )
}

export default CardflipResultView
