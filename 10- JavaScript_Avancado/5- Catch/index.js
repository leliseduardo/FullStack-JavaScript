let komodoShip = {
  name: "Komodo",
  velocity: 80,
  acceleration: 0,
};

function newVelocityShipAfter2Seconds(velocity, acceleration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (acceleration > 0) {
        velocity += acceleration * 2;
        console.log(`Velocidade: ${velocity}`);
        resolve(velocity);
      } else {
        console.log(`Aceleração inválida!`);
        reject("Não possui aceleração");
      }
    }, 2000);
  });
}

newVelocityShipAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)
  .then((vel) => {
    komodoShip.velocity = vel;
    console.log("Velocidade após acerelação:\n", komodoShip);
  })
  .catch((message) => {
    console.log(`Komodo: ${message}`);
  });

console.log("Execução de Promises");
console.log(komodoShip);
