import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



fetch('/gift', {
  method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                unit,
                email,
                sendEmail,
                emailBody,
                emailSubject,
                gasPrice
              })
            })

class App extends Component {
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
                <input type="url" placeholder="Enter link" name="link" required></input>
                <input type="email" placeholder="enter email" name="email" required></input>
                <button className="saveButton" type="submit">Save</button>
              </div>
            </form>
            <p className="content">
              Step 3: Log into reader.linksaver.net
                </p>
          </div>

          </div>
      
      
          <div class="footer">
            <div>Adventure Corperation</div>


            <div>Powered by Etherium</div>
          </div>
    </div>


    );
  }
}

export default App;
