export const selectAuthMessage = (state) => state.auth.message;
export const selectToken = (state) => state.auth.accessToken;
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
