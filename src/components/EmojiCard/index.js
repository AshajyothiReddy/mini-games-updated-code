import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickCard} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickEmoji = () => {
    onClickCard(id)
  }

  return (
    <li className="emoji-card" onClick={onClickEmoji}>
      <img src={emojiUrl} alt={emojiName} className="emoji-card-image" />
    </li>
  )
}

export default EmojiCard
