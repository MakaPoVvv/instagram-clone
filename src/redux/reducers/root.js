import {combineReducers} from 'redux'
import {userDataReducer} from "./userData";
import {usersReducer} from "./users";
import {searchedUsersReducer} from "./searchedUsers";
import {profileData} from "./profile";

export const rootReducer = combineReducers({
    userData : userDataReducer,
    users : usersReducer,
    searchedUsers : searchedUsersReducer,
    profile : profileData
})