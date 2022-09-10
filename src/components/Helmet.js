import PropTypes from "prop-types";
import { useEffect } from "react";

function Helmet(props) {
  document.title = "Yolo - " + props.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.title]);

  return <div>{props.children}</div>;
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
