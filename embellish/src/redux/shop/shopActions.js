import shopTypes from './shopTypes';

export const updateCollections = (collectionsMap) => ({
  type: shopTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
