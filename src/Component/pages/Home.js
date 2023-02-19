import {
  ConstButtonStyleHereda,
  TomatoButton,
  ConstButtonStylePrimary,
} from "./styles";
import { Thing } from "../../Component/layaout/styles.jsx";
function Home() {
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
        <Thing className="something">Prueba1</Thing>
        <Thing className="something-else">Prueba1</Thing>
        
      </h1>
      
      <p>loremp ipsu</p>
    </>
  );
}

export default Home;
