import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview';
import CollectionPage from '../collection-page';

import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/utils'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    // Get stored collection from firebase
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
      console.log(collectionsMap);
    });

    console.log(this.unsubscribeFromSnapshot);
  }

  render() {
    const { match } = this.props;
  
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}

export default ShopPage;
 