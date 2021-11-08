
import styled from 'styled-components'

import api from "./service/Api";
import { Card } from "./components/Card";
import { useState } from 'react/cjs/react.development';


const RequeryWeather =  ({town})=>{
     

  const [weather,setWeather] = useState({

    nome: "",
    temp: "",
    humidity: "",
    icon: "",
    condicao:""
})

   if(town===""){
    console.log(town)
    return(
    <h3>Esperando a sua excolha</h3>
    )
    }
    else{  
    api.get(`/current.json?key=1acd7f6221a84e43bc0120906210910&q=${town}&aqi=no&lang=pt`)
    .then(response=> response.data)
    .then( (resp)=>  setWeather( {
        nome: resp.location.name,
        temp: resp.current.temp_c,
        humidity: resp.current.humidity,
         icon: resp.current.condition.icon,
         condicao:resp.current.condition.text
        
    })
    
   
    )
        
     
    
        
        return(
    
      
        <Card>
        <Img src={ weather.icon} alt="carregando" />
        <div>
        <Line>Nome da cidade:{ weather.nome}</Line>
        <Line>Temperatura: {weather.temp}°C</Line>
        <Line>humidade: {weather.humidity}%</Line>
        <Line>Condição: {weather.condicao}</Line>
        </div>
        </Card>
        
    )
      
  }
}
export default RequeryWeather
const Line = styled.h6`
margin:13px 0 4px 0;
`

const Img = styled.img`
margin-right: 5px;
width: 29%;
height:30%;

`
