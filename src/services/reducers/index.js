import { combineReducers } from 'redux';
import { List, ListHasErrored, ListIsLoading, 
            Languages, LanguageHasErrored, LanguageIsLoading,
            ChangeFilter, ChangeSort } from './reducers';

export default combineReducers({
    List,
    ListHasErrored,
    ListIsLoading,
    Languages,
    LanguageHasErrored,
    LanguageIsLoading,
    ChangeFilter,
    ChangeSort
});