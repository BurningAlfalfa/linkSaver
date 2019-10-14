import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  sendData = () => {
      console.log("url: ", this.state.url, "\nemail: ", this.state.email)
  }

  render() {
    return (

      <div className="app">
        <div>
          <header className="app-header">
            {/*<img src={logo} className="logo" alt="logo"/>*/}
            <h1 className="app-title">Link Saver</h1>
          </header>
          <div>
            <p className="instruct">
              Step 1: Copy link (URL)
              </p>
            <p className="instruct">
              Step 2: Paste link below
              </p>
            <form>
              <div align="center" className="container">
                 <input type="text" onChange={e => this.setState({url: e.target.value})}  placeholder="Enter link" />
                <input type="text" onChange={e => this.setState({email: e.target.value})}  placeholder="enter email" />
                <button onClick={this.sendData} className="saveButton" type="submit">Save</button>
              </div>
            </form>
            <p className="content">
              Step 3: Log into reader.linksaver.net
                </p>
          </div>

          </div>
      
      
          <div className="footer">
            <div>Adventure Corperation</div>


            <div>Powered by Etherium</div>
          </div>
    </div>


    );
  }
}
/*
fetch('/my-endpoint-in-the-server', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(myDataToSendToServer)
})
*/
export default App
