
export default {
  SET_USERS(state, users) {
    state.users = users
  },
  REMOVE_RECORD(state, itemId) {
      const startingPoint = state.users.findIndex((u) => u.id == itemId)
      state.users.splice(startingPoint, 1)
  },
}
