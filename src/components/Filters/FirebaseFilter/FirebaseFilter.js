import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Filter from '../Filter/Filter';
import firebase from '../../../firebase';
import FirebaseFilterSuggestion from './FirebaseFilterSuggestion/FirebaseFilterSuggestion';
import Modal from '../../UI/Modal/Modal';

import classes from './FirebaseFilter.module.scss';

const NUMBER_OF_ITEMS = 20;
const WAIT_INTERVAL = 1000;

export default class FirebaseFilter extends Component {
  collectionRef = firebase.firestore().collection(this.props.collection);
  fixedItems = null;

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

        if (!this.fixedItems) {
          this.fixedItems = loadedItems;
        }

        this.setState({
          loading: false,
          loadedItems: loadedItems
        });
      });
  }

  seeAllClickHandler = () => {
    this.setState({showSuggestionModal: true});
  }

  closeSuggestionModal = () => {
    this.setState({showSuggestionModal: false});
  }

  toTitleCase = (sentence) => {
    const sentenceWords = sentence.split(' ');
    
    for (let i = 0; i < sentenceWords.length; i++) {
      sentenceWords[i] = sentenceWords[i].charAt(0).toUpperCase() + sentenceWords[i].slice(1);
    }

    return sentenceWords.join(' ');
  }

  render() {
    const listFixedItems = this.fixedItems ?
      this.fixedItems.map((item) => <li key={item.id}>{item.name}</li>) : null;

    return (
      <Fragment>
        <Modal show={this.state.showSuggestionModal} closed={this.closeSuggestionModal}>
          <FirebaseFilterSuggestion
            changed={this.inputChangeHandler} />
        </Modal>
        <Filter>
          <ul className={classes.FixedItems}>
            {listFixedItems}
            <li className={classes.SeeAllItem} onClick={this.seeAllClickHandler}>See all</li>
          </ul>
        </Filter>
      </Fragment>
    )
  }
}

FirebaseFilter.propTypes = {
  collection: PropTypes.string
}
