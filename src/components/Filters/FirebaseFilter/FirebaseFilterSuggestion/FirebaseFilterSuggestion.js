import React, { Component, Fragment } from 'react'

import firebase from '../../../../firebase';

import classes from './FirebaseFilterSuggestion.module.scss';

const NUMBER_OF_ITEMS = 20;
const WAIT_INTERVAL = 1000;

class FirebaseFilterSuggestion extends Component {
  collectionRef = firebase.firestore().collection(this.props.collection);

  state = {
    loading: false,
    loadedItems: null,
    searchTerm: '',
    showSuggestionModal: false
  }

  componentDidMount() {
    this.loadItems();
  } 

  getFirebaseQuery = () => {
    let query = this.collectionRef
      .where('name', '>=', this.toTitleCase(this.state.searchTerm));
    
    if (this.state.searchTerm !== '') {
      const topLimitString = this.getTopLimitString(this.state.searchTerm);
      query = query.where('name', '<', this.toTitleCase(topLimitString));
    }
    
    return query.limit(NUMBER_OF_ITEMS);
  }

  getTopLimitString = (sentence) => {
    const sentenceWords = sentence.split(' ');
    const length = sentenceWords.length;

    sentenceWords[length - 1] = (parseInt(sentenceWords[length - 1], 36) + 1).toString(36);

    return this.toTitleCase(sentenceWords.join(' '));
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

  toTitleCase = (sentence) => {
    const sentenceWords = sentence.split(' ');
    
    for (let i = 0; i < sentenceWords.length; i++) {
      sentenceWords[i] = sentenceWords[i].charAt(0).toUpperCase() + sentenceWords[i].slice(1);
    }

    return sentenceWords.join(' ');
  }

  createSuggestedItems = () => {
    if (this.state.loadedItems.length === 0) {
      return <p>No items were found with the provided name...</p>;
    } else {
      return <ul className={classes.SuggestionList}>
        {this.state.loadedItems.map((item) =>
          <li
            key={item.id}
            className={classes.SuggestionItem}
          >
            {item.name}
          </li>)}
      </ul>;
    }
  }

  render() {
    let suggestedItems = null;

    if (this.state.loadedItems) {
      suggestedItems = this.createSuggestedItems();
    }

    return (
      <div className={classes.FilterSuggestion}>
        <input type="text" className={classes.SuggestionSearchbar}
          onChange={(event) => this.inputChangeHandler(event.target.value)} />
        <div className={classes.SuggestionContainer}>
          {suggestedItems}
        </div>
        {/* TODO: Style component to fit to a modal and a sidebar */}
        {/* TODO: Recommended results for query */}
        {/* TODO: Handle select a result event */}
      </div>
    )
  }
}

export default FirebaseFilterSuggestion;
