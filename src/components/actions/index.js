/**
 * Created by shaochenlu on 3/10/17.
 */

export const updateBasicInfo = (name, content) => {
  "use strict";
  return {
    type: 'UPDATE_BASIC',
    name,
    content,
  };
};

export const updateSpecificationInfo = (name, content) => {
  "use strict";
  return {
    type: 'UPDATE_SPEC',
    name,
    content
  };
};

