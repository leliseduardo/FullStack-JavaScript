import React, { Fragment, useState } from "react";

// Constrolando um input
// const Form = (props) => {
//   const [name, setName] = useState("");
//   const handleChange = (event) => setName(event.target.value);

//   const handleSubmit = (event) => {
//     props.addPlanet({ name: name });
//     event.preventDefault();
//   };

//   return (
//     <Fragment>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name: </label>
//           <input id="name" type="text" value={name} onChange={handleChange} />
//         </div>
//         <br />
//         <input type="submit" value="Enviar" />
//       </form>
//     </Fragment>
//   );
// };

// Controlando múltiplos inputs

const initialState = {
  name: "",
  description: "",
  link: "",
  img_url: "",
};

const Form = (props) => {
  const [fields, setFields] = useState(initialState);

  const handleFieldsChange = (e) =>
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = (event) => {
    props.addPlanet(fields);
    event.preventDefault();
    setFields(initialState);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            value={fields.name}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            name="description"
            type="text"
            value={fields.description}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="link">Link: </label>
          <input
            id="link"
            name="link"
            type="text"
            value={fields.link}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="img_url">Img URL: </label>
          <input
            id="img_url"
            name="img_url"
            type="text"
            value={fields.img_url}
            onChange={handleFieldsChange}
          />
        </div>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </Fragment>
  );
};

export default Form;
