import React, { Component } from 'react'

import CatalogContext from '../../../../context/catalog-context';
import { toTitleCase } from '../../../../utils/string.utils';

import classes from './FirebaseFilterSuggestion.module.scss';

const NUMBER_OF_ITEMS = 20;
const WAIT_INTERVAL = 500;

class FirebaseFilterSuggestion extends Component {
  state = {
    loadedItems: [],
    loading: false,
    searchTerm: ''
  }

  static contextType = CatalogContext;

  componentDidMount() {
    this.loadItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.collection !== prevProps.collection) {
      this.loadItems();
    }
  }

  getFirebaseQuery = () => {
    let query = this.props.collection;
    
    if (this.state.searchTerm !== '') {
      const topLimitString = this.getTopLimitString(this.state.searchTerm);

      query = query
        .where('name', '>=', toTitleCase(this.state.searchTerm))
        .where('name', '<', toTitleCase(topLimitString));
    }
    
    return query.limit(NUMBER_OF_ITEMS);
  }

  getTopLimitString = (sentence) => {
    const sentenceWords = sentence.split(' ');
    const length = sentenceWords.length;

    sentenceWords[length - 1] = (parseInt(sentenceWords[length - 1], 36) + 1).toString(36);

    return toTitleCase(sentenceWords.join(' '));
  }
  
  inputChangeHandler = (searchTerm) => {
    this.setState({searchTerm: searchTerm});

    if (this.loadItemsTimer) {
      clearTimeout(this.loadItemsTimer);
    }

    this.setState({loading: true});
    this.loadItemsTimer = setTimeout(() => this.loadItems(), WAIT_INTERVAL);
  }

  loadItems = () => {
    const firebaseQuery = this.getFirebaseQuery();

    firebaseQuery.get()
      .then((response) => {
        const loadedItems = response.docs.map((doc) => doc.data());

        this.setState({
          loading: false,
          loadedItems: loadedItems
        });
      });
  }

  createSuggestedItems = () => {
    if (this.state.loadedItems.length === 0) {
      return <p className={classes.NoItemsFound}>No items found with the provided name...</p>;
    } else {
      return <ul className={classes.SuggestionList}>
        {this.state.loadedItems.map((item) =>
          <li
            key={item.id}
            className={classes.SuggestionItem}
            onClick={() => this.filterClickHandler(item)}>
            {this.props.filterDisplayValue(item)}
          </li>)}
      </ul>;
    }
  }

  filterClickHandler = (item) => {
    this.setState({searchTerm: ''}, () => this.loadItems());
    this.context.selectFilter({
      displayValue: this.props.filterDisplayValue(item),
      filterName: this.props.filterName,
      value: this.props.filterValue(item)
    });
  }

  render() {
    let suggestedItems = null;
    if (this.state.loadedItems) {
      suggestedItems = this.createSuggestedItems();
    }

    return (
      <div className={classes.FilterSuggestion}>
        <div className={classes.SearchbarWrapper}>
          <input type="text" className={classes.SuggestionSearchbar}
            placeholder={this.props.searchbarPlaceholder}
            onChange={(event) => this.inputChangeHandler(event.target.value)}
            value={this.state.searchTerm} />
          <p className={classes.SearchbarTip}>Only the first {NUMBER_OF_ITEMS} results are shown, type for more</p>
        </div>
        <div className={classes.SuggestionContainer}>
          {suggestedItems}
        </div>
      </div>
    )
  }
}

export default FirebaseFilterSuggestion;
