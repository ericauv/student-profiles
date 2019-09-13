import React from 'react';
export const StudentsContext = React.createContext({
  students: [],
  nameFilter: '',
  tagFilter: '',
  updateStudent: () => {},
  updateNameFilter: () => {},
  updateTagFilter: () => {}
});
