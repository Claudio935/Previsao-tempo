import { Button } from "./components/Button";
import { Input } from "./components/Input";
import styled from 'styled-components'
import { useCity, useWeather } from './providers/CityContext'
import  RequeryWeather  from "./Weather";


export const GetWeather =()=>{
   

const {city,setCity} = useCity()



return(

    <Weather>
    <Input id="input"></Input>
    <Button onClick={()=>{setCity({nome: document.getElementById("input").value})}}>
    Clique para ver a previsão
    </Button>
    <RequeryWeather town = {city.nome}></RequeryWeather>

    </Weather>
)


}

const Weather = styled.div`
display: flex;
flex-direction: column;
align-items: center

`
const Line = styled.h6`
margin:4px;
`
