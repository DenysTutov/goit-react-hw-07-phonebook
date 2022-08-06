import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addNewContact: (state, action) => {
      state.items.push(action.payload);
    },

    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const contactsSliceReducer = contactsSlice.reducer;

// Actions
export const { addNewContact, filteredContacts, deleteContact } =
  contactsSlice.actions;

// Selectors
export const getContactsItems = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
