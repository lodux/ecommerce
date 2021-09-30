import { createSelector } from 'reselect';

//input selector and outpu selector

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
)

