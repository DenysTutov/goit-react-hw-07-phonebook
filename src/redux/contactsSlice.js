import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
} from '../redux/contactsOperation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: { isAdd: false, isDelete: false },
    error: null,
  },
  reducers: {
    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [getContacts.rejected]: (state, action) => {
      state.error = action.payload;
    },

    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.loading.isAdd = false;
    },
    [addContact.pending]: state => {
      state.loading.isAdd = true;
    },

    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.loading.isDelete = false;
    },
    [deleteContact.pending]: state => {
      state.loading.isDelete = true;
    },
  },
});

export const contactsSliceReducer = contactsSlice.reducer;

// Actions
export const { addNewContact, filteredContacts } = contactsSlice.actions;

// Selectors
export const getContactsItems = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const isAddLoading = state => state.contacts.loading.isAdd;
export const isDeleteLoading = state => state.contacts.loading.isDelete;
