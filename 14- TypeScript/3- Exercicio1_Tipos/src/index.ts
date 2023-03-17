const spaceships = [];

function addSpaceships(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };

  spaceships.push(spaceship);

  alert(`A nave ${spaceship.name} foi registrada.`);
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: string;
    crew: string[];
    inMission: boolean;
  };

  spaceship = spaceships.find((ship) => ship.name === name);

  return spaceship;
}

function addCrewMember(
  member: string,
  spaceship: { name: string; crewLimit: number; crew: string[] }
) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert(`${member} não pode ser adicionado. Limite atingido.`);
  } else {
    spaceship.crew.push(member);

    alert(`${member} foi adicionado a tripulação da ${spaceship.name}.`);
  }
}

function sendInMission(spaceship: {
  name: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}) {
  if (spaceship.inMission) {
    alert(`${spaceship.name} não pode ser enviada. Nave já em missão.`);
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(`${spaceship.name} não pode ser enviada. Tripulação insuficiente.`);
  } else {
    spaceship.inMission = true;
    alert(`${spaceship.name} foi enviada para a missão.`);
  }
}
