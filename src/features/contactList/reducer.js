import { SET_CONTACT_ACTIVE_ITEM } from './actions';

const initialState = {
    activeContact: 2,
};

export default function contacts(state = initialState, action) {
    switch (action.type) {
        case SET_CONTACT_ACTIVE_ITEM: {
            return { ...state, activeContact: action.value };
        }
        default: return state;
    }
}
