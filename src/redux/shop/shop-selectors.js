import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

// We can use upper function selectShopCollection to get directly key that we need it
export const selectCollection = (collectionUrlParam) => createSelector(
  [selectShopCollection],
  collections => collections[collectionUrlParam]
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  collections => Object.keys(collections).map(key => collections[key])
);
