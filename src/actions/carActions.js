
export const addItem= (item) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      name: item.name,
      price: item.price
    }
  }
}//end addItem