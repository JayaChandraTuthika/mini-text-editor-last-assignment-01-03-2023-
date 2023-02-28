import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './App.css'
import {StyledButton, StyledText} from './styledComponents'

class App extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  onToggleBold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  onToggleItalic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  onToggleUnderline = () => {
    this.setState(prev => ({underline: !prev.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="inner-left-container">
            <h1 className="inner-left-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="main-image"
            />
          </div>
          <div className="text-container">
            <div className="buttons-container">
              <StyledButton
                type="button"
                active={bold}
                className="style-button"
                onClick={this.onToggleBold}
                data-testid="bold"
              >
                <VscBold className="text-style-icon" />
              </StyledButton>

              <StyledButton
                type="button"
                active={italic}
                className="style-button"
                onClick={this.onToggleItalic}
                data-testid="italic"
              >
                <GoItalic className="text-style-icon" />
              </StyledButton>

              <StyledButton
                type="button"
                active={underline}
                className="style-button"
                onClick={this.onToggleUnderline}
                data-testid="underline"
              >
                <AiOutlineUnderline className="text-style-icon" />
              </StyledButton>
            </div>
            <StyledText bold={bold} italic={italic} underline={underline} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
