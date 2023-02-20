import {
  ConstButtonStyleHereda,
  TomatoButton,
  ConstButtonStylePrimary,
} from "./styles";
import { ThemeProvider } from 'react'

import { Thing,Input, PasswordInput,Button } from "../../Component/layaout/styles.jsx";
function Home() {
  const theme = {
    main: "mediumseagreen"
  }

  
  return (
    <>
      <h1>
        <TomatoButton as="a" href="#">
          Bienvenido al Home - Link button
        </TomatoButton>
        <TomatoButton inputColor="green">Hola h1</TomatoButton>
        <TomatoButton>Button Tomato</TomatoButton>
       
        <ConstButtonStylePrimary>NORMAL</ConstButtonStylePrimary>
        <ConstButtonStylePrimary>Heredado normal</ConstButtonStylePrimary>
        <ConstButtonStyleHereda Primary>
          Primary Heredado
        </ConstButtonStyleHereda>
        <Thing>Prueba1</Thing>
        <Button>BOTON PropDefault</Button>
        <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
        <Thing className="something">Prueba1</Thing>
        <Thing className="something-else">Prueba1</Thing>
        <Input pH="props.pH" size="2em" />
        <PasswordInput/>
        
      </h1>
      
      
      <p>loremp ipsu</p>
    </>
  );
}

export default Home;
