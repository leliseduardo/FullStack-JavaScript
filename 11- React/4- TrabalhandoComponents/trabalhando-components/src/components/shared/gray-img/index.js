import "./style.css";

const GrayIMG = (props) => {
  return (
    <img
      className={props.grayScale ? "gray-scale" : "color-scale"}
      src={props.img_url}
    ></img>
  );
};

export default GrayIMG;
