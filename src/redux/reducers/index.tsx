import searchTicketReducer from './searchTicket';
import tab from './Tab';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    search: searchTicketReducer,
    tab: tab,
});

export default rootReducer;
