

import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INTIAL_STATE ={darkMode:false};

//  the (state --> contains the value in the INITAL_STATE from teh useReducer | when the dispatch is called )

const themeReducer =(state,action)=>{
        switch(action.type){
            case "TOGGLE" :
                return {darkMode : !state.darkMode}
        
        default: 
        return state;
        }
};



export const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(themeReducer,INTIAL_STATE);
    return (
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children }
        </ThemeContext.Provider>
    )
}

