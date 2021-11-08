
import {GetWeather} from './GetWeather'
import CityProvider from './providers/CityContext';
import GlobalStyle from './globalStyles';
import {CapitalWeather} from './CapitalWeather';

function App (){
  return (
    <>
    <CityProvider>
    <GlobalStyle />
    <GetWeather></GetWeather>
    <CapitalWeather/>
    </CityProvider>
    

    </>
  );
}

export default App;
