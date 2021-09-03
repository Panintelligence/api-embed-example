import logo from './pi-logo.png';
import React from 'react';
import './App.css';
import { request } from '../../helpers/request-helper';
import PiContext from '../../contexts/PiContext';
import PiChart from '../PiChart/PiChart';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piToken: null,
      piURL: null
    }
  }

  componentDidMount() {
    request('http://localhost:3001/pi/token', { 'pi-username': 'admin' })
      .then(
        data => {
          this.setState({
            piToken: data.token,
            piURL: data.baseUrl
          });
          console.log({
            piToken: data.token,
            piURL: data.baseUrl
          })
        },
        err => {
          console.error(err);
        });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <a href="https://www.panintelligence.com/" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="logo" alt="logo" />
          </a>
          Panintelligence Embedding Example App
        </header>
        <div className="content">
          <div className="flex column center">
            <p>The charts on the right are embedded and display without the user needing to login.</p>
            <p>This is done by requesting a dashboard token and then using it to display the chart.</p>
            <p>You'll need to set up the dashboard with the <a href="https://panintelligence.atlassian.net/wiki/spaces/PD/pages/181010582/Embedding+Dashboards+Charts">right embedding configuration</a></p>
            <p>Check the source code <a href="https://github.com/Panintelligence/api-embed-example/tree/main/client-server-app">on github</a>.</p>
          </div>
          <div className="flex column center">
            <PiContext.Provider value={this.state}>
              <PiChart chartId="151" />
              <PiChart chartId="155" />
            </PiContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
