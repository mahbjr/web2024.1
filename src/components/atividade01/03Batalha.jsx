import {Children} from 'react';

function Hero({name, img}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="Hero" style={{width: '200px'}} />
    </div>
  );
}

function Enemy({name, img}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="Enemy" style={{width: '200px'}} />
    </div>
  );
}

function Arena({heroName, enemyName, heroImg, enemyImg}) {
  return (
    <div>
      <Hero name={heroName} img={heroImg} />
      <Enemy name={enemyName} img={enemyImg} />
    </div>
  );
}

function World(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export { Arena, World };
