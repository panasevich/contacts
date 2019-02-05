import { SET_SEARCH_STRING } from './actions';

const initialState = {
    searchString: '',
};

export default function search(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH_STRING: {
            return { ...state, searchString: action.value };
        }
        default: return state;
    }
}
