/**
 * Created by shaochenlu on 3/10/17.
 */

export const updateForm = (formName, fieldName, content) => {
  return {
    type: 'UPDATE',
    formName,
    fieldName,
    content
  };
};
