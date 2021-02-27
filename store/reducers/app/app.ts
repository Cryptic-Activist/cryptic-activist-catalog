import update from 'immutability-helper';

const initialState = {
  isMobile: false,
  dimensions: [0, 0],
  warnings: [],
  type: 1
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'SET_IS_MOBILE':
      return update(state, {
        isMobile: { $set: action.payload.isMobile }
      });
    case 'GET_DIMENSIONS':
      return update(state, {
        dimensions: { $set: action.payload.dimensions }
      });
    case 'RESET_WARNINGS':
      return update(state, {
        warnings: { $set: [] }
      });
    case 'SET_WARNINGS':
      if (
        state.warnings.filter(
          (warningMessage) => warningMessage === action.payload.warning
        ).length === 0
      ) {
        return update(state, {
          warnings: { $set: state.warnings.concat(action.payload.warning) }
        });
      }
      break;
    case 'SET_AS_BUY':
      return update(state, {
        type: { $set: 1 }
      });
    case 'SET_AS_SELL':
      return update(state, {
        type: { $set: 0 }
      });
    default:
      return state;
  }
}
