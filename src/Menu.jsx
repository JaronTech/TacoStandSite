import Card from "./Card";
import CardContainer from './CardContainer';

import nachoImage from './assets/Nachos.jpg'
import burritoImage from './assets/Burrito.jpg'
import tacoImage from './assets/tacos.jpg'
import chickwrapImage from './assets/chickenWrap.jpg'
import tacoBeefImage from './assets/beefTaco.jpg'
import quesadillaImage from './assets/Quesadilla.jpg'

function Menu() {

  return(
    <>
      <CardContainer>
        <Card image={nachoImage} name="Nachos" desc="A bowl of Nachos" />
        <Card image={burritoImage} name="Burrito" desc="A rice based burrito" />
        <Card image={tacoImage} name="Steak Tacos" desc="3 Steak Tacos" />
        <Card image={chickwrapImage} name="Chicken Wrap" desc="Chicken wrap with vegetables" />
        <Card image={tacoBeefImage} name="Beef Tacos" desc="3 Beef Tacos" />
        <Card image={quesadillaImage} name="Quesadilla" desc="Chicken Quesadilla" />
      </CardContainer>
    </>
  );
}

export default Menu
