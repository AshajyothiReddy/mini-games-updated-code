import {Component} from 'react'
import './index.css'

class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowHiddenCells: true,
    }
    this.timerId = null
  }

  componentDidMount() {
    const {hiddenCellsDisplayTime} = this.props
    this.timerId = setTimeout(() => {
      // Store the timerId
      this.setState({shouldShowHiddenCells: false})
    }, hiddenCellsDisplayTime)
  }

  componentWillUnmount() {
    clearTimeout(this.timerId) // Clear the timer in componentWillUnmount
  }

  render() {
    const {isHidden, isClicked, onClick} = this.props
    const {shouldShowHiddenCells} = this.state
    const cellStyle = {}
    if (isClicked) {
      if (isHidden) {
        cellStyle.backgroundColor = 'red'
      } else {
        cellStyle.backgroundColor = 'blue'
      }
    }
    return (
      <div
        className={`cell ${
          isHidden && shouldShowHiddenCells ? 'highlighted' : ''
        }`}
        style={cellStyle}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        {}
      </div>
    )
  }
}

export default Cell
