import { combineReducers } from 'redux';
import contacts from '../features/contactList/reducer';
import search from '../features/search/reducer';

export default combineReducers({
    contacts,
    search,
});
