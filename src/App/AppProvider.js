import React, { Component } from 'react';
const cc = require('cryptocompare');
export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      setPage: this.setPage,
      ...this.savedSettings(),
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
  };

  setPage = page => this.setState({ page });

  savedSettings = () => {
    let crytoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!crytoDashData) {
      return { page: 'settings', firstVisit: true };
    }

    return {};
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        test: 'hello'
      })
    );
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
