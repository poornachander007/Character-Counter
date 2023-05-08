import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const emptyUrl =
  'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'

// Replace your code here
class App extends Component {
  state = {list: [], userInput: ''}

  renderEmptyView = () => (
    <div className="empty_view_container">
      <img width={600} src={emptyUrl} alt="no user inputs" />
    </div>
  )

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {userInput} = this.state
    const characters = userInput.length
    const word = `${userInput}: ${characters}`
    this.setState(preState => ({list: [...preState.list, word], userInput: ''}))
  }

  render() {
    const {list, userInput} = this.state
    return (
      <div className="app_container">
        <div className="content_container">
          <div className="left_container">
            <h1 className="banner_heading">
              Count the characters like a<br /> Boss...
            </h1>
            {list.length === 0 ? (
              this.renderEmptyView()
            ) : (
              <ul className="ul_container">
                {list.map(eachItem => (
                  <li key={uuidv4()}>
                    <p className="item">{eachItem}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="right_container">
            <h1 className="right_heading">Character Counter</h1>
            <form className="input_container" onSubmit={this.onClickAdd}>
              <input
                className="inputElement"
                type="text"
                value={userInput}
                onChange={this.onChangeUserInput}
                placeholder="Enter the Characters here"
              />
              <button type="submit" className="add_button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
