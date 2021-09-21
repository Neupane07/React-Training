export default function counter(state = {count: 0, users: []}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.count + 1
    case 'INCREMENT_IF_ODD':
      return (state.count % 2 !== 0) ? state.count + 1 : state.count
    case 'DECREMENT':
      return state.count - 1
    case 'FETCH':
      return state.users = action.payload
    default:
      return state.count
  }
}
