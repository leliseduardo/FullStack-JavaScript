let komodoShip = {
  name: "Komodo",
  velocity: 80,
  acceleration: 10,
};

function newVelocityShipAfter2Seconds(velocity, acceleration) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (acceleration > 0) {
        velocity += acceleration * 2;
        console.log(`Velocidade: ${velocity}`);
        resolve(velocity);
      } else {
        console.log(`Aceleração inválida!`);
        reject("Não possui aceleração");
      }
    }, 1000);
  });
}

newVelocityShipAfter2Seconds(komodoShip.velocity, komodoShip.acceleration);

console.log("Execução de Promises");
