import { createContext } from 'react';

/**
 * @typedef MarketingSiteContext
 *
 * @prop {string} documentCaptureTipsURL Link to Help Center article with tips for document capture.
 */

const MarketingSiteContext = createContext(
  /** @type {MarketingSiteContext} */ ({ documentCaptureTipsURL: '' }),
);

export default MarketingSiteContext;
