import Popup from 'reactjs-popup'

// import 'reactjs-popup/dist/index.css'
import {CgClose} from 'react-icons/cg'

import './index.css'

const RulesPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          RULES
        </button>
      }
    >
      {close => (
        <div className="container">
          <button
            type="button"
            dtat-testid="close"
            className="cross-icon"
            onClick={() => close()}
          >
            <CgClose />
            {/* */}
          </button>
          <p className="rules-heading-popup">Rules</p>
          <ul className="rules-list-popup">
            <li className="rule-item-popup">
              The game result should be based on user and user opponent choices
            </li>
            <li className="rule-item-popup">
              When the user choice is rock and his opponent choice is rock then
              the result will be <span className="span-item">IT IS DRAW</span>
            </li>
            <li className="rule-item-popup">
              When the user choice is paper and his opponent choice is paper
              then the result will be{' '}
              <span className="span-item">IT IS DRAW</span>
            </li>
            <li className="rule-item-popup">
              When the user choice is scissors and his opponent choice is
              scissors then the result will be{' '}
              <span className="span-item-popup">IT IS DRAW</span>
            </li>
            <li className="rule-item-popup">
              When the user choice is paper and his opponent choice is rock then
              the result will be <span className="span-item">YOU WON</span>
            </li>
            <li className="rule-item-popup">
              When the user choice is scissors and his opponent choice is paper
              then the result will be <span className="span-item">YOU WON</span>
            </li>
            <li className="rule-item-popup">
              When the user choice is rock and his opponent choice is scissors
              then the result will be <span className="span-item">YOU WON</span>
            </li>
            <li className="rule-item-popup">
              When the user choice is a scissors and his opponent choice is rock
              then the result will be{' '}
              <span className="span-item">YOU LOSE</span>
            </li>
            <li className="rule-item-popup">
              When the user choice is a paper and his opponent choice is
              scissors then the result will be{' '}
              <span className="span-item">YOU LOSE</span>
            </li>
            <li className="rule-item-popup">
              When the user choice is a rock and his opponent choice is paper
              then the result will be{' '}
              <span className="span-item">YOU LOSE</span>
            </li>
            <li className="rule-item-popup">
              When the result is <span className="span-item">YOU WON</span>,
              then the count of the score should be incremented by 1
            </li>
            <li className="rule-item-popup">
              When the result is <span className="span-item">YOU LOSE</span>,
              then the count of the score should be decremented by 1.
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)
export default RulesPopUp
