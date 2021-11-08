import React, {createContext, useContext, useState} from 'react'

export const CityContext = React.createContext()

export default function CityProvider({children}){
    const  [city, setCity] = useState({
        nome: ""
    })
    
    return(
        <CityContext.Provider value={{city,setCity}}>
            {children}
        </CityContext.Provider>
    )

}
export function useCity(){
    const context = useContext(CityContext);
    const {city, setCity} = context;
    return {city,setCity}
}
