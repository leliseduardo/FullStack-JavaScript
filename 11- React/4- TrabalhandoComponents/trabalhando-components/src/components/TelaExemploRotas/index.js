import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const TelaExemplo = () => {
  const [examples, setExamples] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    setExamples({ id });
  });

  const backToPlanets = () => {
    navigate("/");
  };

  if (examples.id === "exemplo") {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <br />
        <h3>Tela de exemplo</h3>
        <button onClick={backToPlanets}>Voltar</button>
      </Fragment>
    );
  }
  if (examples.id === "teste") {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <br />
        <h3>Tela de teste</h3>
        <button onClick={backToPlanets}>Voltar</button>
      </Fragment>
    );
  }
  if (examples.id === "welcome") {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <br />
        <h3>Tela de boas vindas</h3>
        <button onClick={backToPlanets}>Voltar</button>
      </Fragment>
    );
  }
  if (examples.id === "erro") {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <br />
        <h3>Tela de erro</h3>
        <Link to={"/exemplo"}>Voltar para exemplo</Link>
      </Fragment>
    );
  }
};

export default TelaExemplo;
