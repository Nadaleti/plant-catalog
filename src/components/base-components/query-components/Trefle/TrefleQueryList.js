import React, { Component, Fragment } from 'react';

import { loadAppToken, TrefleAxios } from './trefle.config';

const FILTER_QUERY_PARAMS = new Map([
  ['family', 'family_common_name'],
  ['plant name', 'q']
]);

const PAGE_SIZE = 20;

class TrefleQueryList extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.loadItemList();
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps !== this.props) {
      this.loadItemList();
    }
  }

  loadItemList = () => {
    const urlWithParams = this.props.uri + `?${this.getQueryParams()}`;

    loadAppToken()
      .then((appToken) =>
        TrefleAxios.get(urlWithParams, {headers: {'Authorization': `Bearer ${appToken}`}})
          .then((response) => this.setState({items: response.data}))
      )
      .catch((error) => {})
  }

  getQueryParams = () => {
    const queryParams = this.props.selectedFilters
      .map((selectedFilter) => FILTER_QUERY_PARAMS.get(selectedFilter.filterName) + '=' + selectedFilter.value);
    
    queryParams.push(`page=${this.props.page}`, `page_size=${PAGE_SIZE}`);

    return queryParams.join('&');
  }

  render() {
    return (
      <Fragment>
        {this.props.children(this.state.items)}
      </Fragment>
    );
  }
}

export default TrefleQueryList;

