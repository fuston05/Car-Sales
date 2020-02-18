// **** CAR-REDUCER **** //

const initialState= {
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

export const carReducer= ( state= initialState, action ) => {
  switch(action.type){

    case 'ADD_ITEM': 
    const newItem= {
      name: action.payload.name,
      price: action.payload.price
    }
    console.log('newItem name: ',newItem.name);
      return {
        ...state,
        car: { ...state.car, features: [...state.car.features, newItem ]  }
      }

    default: return state;
  }//end switch
}// end carReducer