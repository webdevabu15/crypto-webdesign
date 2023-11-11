export const initialState ={
    liked:[],
}

const reducer = (state,action) => {   
   switch(action.type){
    case "ADD_TO_LIKE":
        return {
            liked: [...state.liked, action.card]
        }
    case "DISLIKE_PRODUCT":
    const indexOfDislikedProduct = state.liked.findIndex(card => card.id === action.id )
    state.liked.splice(indexOfDislikedProduct, 1)
        return {
         ...state,
        liked: state.liked
        }
    default:
        return state
   }
}

export default reducer 
