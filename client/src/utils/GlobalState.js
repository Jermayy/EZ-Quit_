import React, {createContext, useReducer, useContext} from "react";

import{
Create_Note,
Delete_Note
} from './actions';

const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = (state,action) => {
    switch (action.type){
        case Create_Note:
            return{
                ...state,
                notes:[action.note, ...state.notes]
            };

        case Delete_Note:
            return{
                ...state,
                notes: state.notes.filter((note) => {
                  return note._id !== action._id;
            })
         };

         default:
    return state;



}}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {notes: []}
      );
  
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
  export { StoreProvider, useStoreContext };
  