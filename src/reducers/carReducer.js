// **** CAR-REDUCER **** //
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      let duplicate= false;
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price
      }
      state.car.features.map(ele => {
        if(ele.id === newItem.id){
          duplicate= true;
        }else{
          duplicate= false;
        }
      })
      if( !duplicate ){
        const newAdditionalPrice = action.payload.price + state.additionalPrice;
        return {
          ...state,
          additionalPrice: newAdditionalPrice,
          car: { ...state.car, features: [...state.car.features, newItem] }
        }
      }else{
        return state;
      }
        

    case 'REMOVE_ITEM':
      const adjustedPrice = state.additionalPrice - action.payload.price;
      const newFeatureList = state.car.features.filter(item => {
        return (item.id !== action.payload.id);
      })
      return {
        ...state,
        additionalPrice: adjustedPrice,
        car: { ...state.car, features: newFeatureList }
      }

    default: return state;
  }//end switch
}// end carReducer