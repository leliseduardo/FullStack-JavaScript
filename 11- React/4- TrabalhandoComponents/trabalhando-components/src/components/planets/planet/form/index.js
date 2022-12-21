import React, { Fragment, useState } from "react";

const initialValues = {
  name: "",
};

const Form = (props) => {
  const [fields, setFields] = useState(initialValues);
  const handleFieldsChange = (e) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSatellite(fields);
    setFields(initialValues);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
