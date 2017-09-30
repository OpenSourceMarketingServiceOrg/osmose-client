/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import Transformer from '@/transformers/AccountTransformer';
import * as types from './mutation-types';

export const find = ({ commit }) => {

  new Proxy().find()
  .then((response) => {
      commit(types.FIND, Transformer.fetch(response));
  })
  .catch(() => {
    console.log('Request failed...');
  });
  
  commit(types.FIND, Transformer.fetch(account));
};

export default {
  find,
};
