import { useState } from "react"
import RequeryWeather from "./Weather"
import styled from 'styled-components';
const capitais = ["Aracaju","Belém","Belo Horizonte","Boa Vista",
                "Brasília","Campo Grande","Cuiabá","Curitiba", "Florianópolis",
                "Fortaleza","Goiânia","João Pessoa","Macapá","Maceió","Manaus", "Natal",
                "Palmas","Porto Alegre","Porto Velho","Recife","Rio Branco","Rio de Janeiro","Salvador",
                "São Luís","São Paulo", "Teresina", "Vitória"]

var n = 0

export const CapitalWeather = () => {
   const[number,setNumber] = useState()




   setTimeout(() => {
      if(n<=24){
      setNumber(n)
      n=n+3
      }else{
         setNumber(n)
         n=0
      }
   },10000);
       
      
       
       
            return(
            <Position>
            <RequeryWeather town={capitais[number]}/>
            <RequeryWeather town={capitais[number+1]}/>
            <RequeryWeather town={capitais[number+2]}/>
            </Position>
            )
       
        
    

    
}


const Position = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  
`;
