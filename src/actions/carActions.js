
export const addItem= (item) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      id: item.id,
      name: item.name,
      price: item.price
    }
  }
}//end addItem

export const removeItem= (item) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id: item.id,
      price: item.price
    }
  }
}//end addItem