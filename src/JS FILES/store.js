import { createStore } from "redux"

const reducer = (state, action) => {
    switch (action.type) {
        case 'mobile':
            return {
                ...state, user: action.data
            }
            break;

        case "login":
            return {
                ...state, log: action.data
            }
            break;
    }
}
const store = createStore(reducer);
export default store;