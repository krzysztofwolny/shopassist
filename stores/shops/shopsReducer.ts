import ShopDataInterface from '../../dataInterfaces/shopDataInterface';

const INITIAL_STATE: ShopDataInterface[] | [] = [];

const shopsReducer = (state = INITIAL_STATE, action: { type: string; payload: ShopDataInterface }) => {
  switch (action.type) {
    case 'ADD_SHOP':
        const stateCopy = [...state];
        stateCopy.push(action.payload);
        return stateCopy;
    default:
      return state
  }
};

export default shopsReducer;
