import React, { Component, Fragment } from 'react'

import firebase from '../../../../firebase';

const NUMBER_OF_ITEMS = 20;
const WAIT_INTERVAL = 1000;

class FirebaseFilterSuggestion extends Component {
  collectionRef = firebase.firestore().collection(this.props.collection);

  state = {
    loading: false,
    loadedItems: [],
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

  render() {
    return (
      <Fragment>
        <input type="text"
          onChange={(event) => this.inputChangeHandler(event.target.value)} />
        {/* TODO: Style component to fit to a modal and a sidebar */}
        {/* TODO: Recommended results for query */}
        {/* TODO: Handle select a result event */}
      </Fragment>
    )
  }
}

export default FirebaseFilterSuggestion;
