import React from 'react';

import noImageFound from '../../assets/leafs.png';
import { toTitleCase } from '../../utils/string.utils';
import LoadSpinner from '../UI/LoadSpinner/LoadSpinner';
import TrefleQueryItem from '../base-components/query-components/Trefle/TrefleQueryItem';

import classes from './PlantCard.module.scss';

const plantCard = (props) => {

  const getImage = (item) => {
    if (item.images.length === 0) {
      return <div className={classes.NoImageFound}>
        <img src={noImageFound} />
        <p>No image found :(</p>
      </div>;
    }

    return <img src={getImageUrl(item)} className={classes.PlantImage} />;
  }

  const getImageUrl = (item) => {
    let image = item.images
      .find((image) => image.url.includes(item.scientific_name.replace(' ', '_')) && !image.url.includes('distribution'));
    
    if (!image) {
      image = item.images[0];
    }

    return image.url;
  }

  const getPlantCard = (loading, item) => {
    const cardTitleClasses = [classes.ScientificName];
    const cardSubtitleClasses = [classes.CommonName];

    if (loading) {
      cardTitleClasses.push(classes.Loading);
      cardSubtitleClasses.push(classes.Loading);
    }

    const spinner = <LoadSpinner height='60px' width='60px' />;

    return (
      <div className={classes.PlantCard}>
        <div className={classes.PlantCardImageContainer}>{loading ? spinner: getImage(item)}</div>
        <div className={classes.PlantCardContent}>
          <h3 className={cardTitleClasses.join(' ')}>
            {loading || item.scientific_name}
          </h3>
          <p className={cardSubtitleClasses.join(' ')}>
            {loading || toTitleCase(item.common_name)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <TrefleQueryItem uri='/plants' id={props.id}>
      {(loading, item) => getPlantCard(loading, item)}
    </TrefleQueryItem>
  )
}

export default plantCard;
