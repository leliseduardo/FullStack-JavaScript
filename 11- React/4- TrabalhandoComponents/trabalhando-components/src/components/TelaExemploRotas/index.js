import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TelaExemplo = () => {
  const [examples, setExamples] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    setExamples({ id });
  });

  if (examples.id === "exemplo") {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <br />
        <h3>Tela de exemplo</h3>
      </Fragment>
    );
  }
  if (examples.id === "teste") {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <br />
        <h3>Tela de teste</h3>
      </Fragment>
    );
  }
  if (examples.id === "welcome") {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <br />
        <h3>Tela de boas vindas</h3>
      </Fragment>
    );
  }
};

export default TelaExemplo;
