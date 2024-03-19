//import HelloWorld from "./components/01Hello/HelloWorld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
//import Loja from "./components/03Props/Loja";
//import SistemaSolar from "./components/04Children/SistemaSolar";
//import Planeta from "./components/04Children/Planeta";
//import { ComPai } from "./components/05comPaiFilho/ComPai";
//import { Estado } from "./components/06estados/Estado";
//import Pokemon from "./components/06estados/Pokemon";
//import { CompA } from "./components/07PropDrilling.js/PropDrilling";
//import { Pai } from "./components/atividade01/01Pai";
//import { MeuPC } from "./components/atividade01/02MeuPC";
import { World } from "./components/atividade01/03Batalha";
import { Arena } from "./components/atividade01/03Batalha";


// function App() {
//   return (
//     <div>
//       <h1>Desenvolvimento de software</h1>
//       <MeuPC/>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>Desenvolvimento de software</h1>
      <World>
        <Arena 
          heroName="Baki" 
          heroImg="https://tm.ibxk.com.br/ms/images/highlights/000/054/036/50739.jpg?ims=1200x675" 
          enemyName="Yujiro" 
          enemyImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePN6YMTDQeHjjYoUskboT1F88Cgi7GdiqXQ&usqp=CAU" 
        />
        <Arena 
          heroName="Goku" 
          heroImg="https://criticalhits.com.br/wp-content/uploads/2022/03/goku_an6e.h720.webp" 
          enemyName="Frieza" 
          enemyImg="https://assetsio.gnwcdn.com/ihgrhycwtne73hy3nv2d.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" 
        />
        <Arena 
          heroName="Naruto" 
          heroImg="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png" 
          enemyName="Sasuke" 
          enemyImg="https://www.einerd.com.br/wp-content/uploads/2020/10/sasuke-uchiha-e1602592194290.jpg" 
        />
      </World>
    </div>
  );
}

export default App;
