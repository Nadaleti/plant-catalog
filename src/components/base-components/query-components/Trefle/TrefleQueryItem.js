import React, { Component, Fragment } from 'react';

import { loadAppToken, TrefleAxios } from './trefle.config';

class TrefleQueryItem extends Component {
  state = {
    loading: true,
    item: null
  }

  componentDidMount() {
    this.loadItem();
  }

  componentDidUpdate(prevProps, _) {
    if (this.props !== prevProps) {
      this.loadItem();
    }
  }

  loadItem = () => {
    loadAppToken()
      .then((appToken) => this.loadItemFromTrefle(appToken))
      .catch((_) => {})
  }

  loadItemFromTrefle = (appToken) => {
    this.setState({loading: true});

    TrefleAxios.get(`${this.props.uri}/${this.props.id}`, {headers: {'Authorization': `Bearer ${appToken}`}})
      .then((response) => this.setState({loading: false, item: response.data}))
  }

  render() {
    return (
      <Fragment>
        {this.props.children(this.state.loading, this.state.item)}
      </Fragment>
    )
  }
}

export default TrefleQueryItem;
