export const initialState = {
  term: null,
  id: ""
};

export const actionTypes ={
    SET_SERCH_TERM: "SET_SEARCH_TERM",
    SET_VID: "SET_VID"
 };

 const reducer = (state,action) => {
     console.log(action);

     switch(action.type){
         case actionTypes.SET_SERCH_TERM:
             return{
                 ...state,
                 term: action.term,
             }

         case actionTypes.SET_VID:
             return{
                 ...state,
                 id: action.id
             }
             default:
                 return state;
     }
 };

 export default reducer;