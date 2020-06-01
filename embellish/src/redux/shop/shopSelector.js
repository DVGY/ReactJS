import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectShopCollectionID = (collectionURL) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionURL] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],

  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],

  (shop) => !!shop.collections
);
