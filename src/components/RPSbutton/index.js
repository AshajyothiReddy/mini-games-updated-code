import './index.css'

const Button = props => {
  const {buttonDetails, onClickButton} = props
  const {imageUrl, id} = buttonDetails
  const testid = id.toLowerCase().concat('Button')

  const onClickBtn = () => {
    onClickButton(id)
  }

  return (
    <li className="list-item">
      <button type="button" data-testId={testid} onClick={onClickBtn}>
        <img src={imageUrl} className="image" alt={id} />
      </button>
    </li>
  )
}

export default Button
