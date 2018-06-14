import React from 'react';
import PropTypes from "prop-types";
import "./Components.css"


const Header = (props) => {
  const { headerData, button, changeButton } = props;
  const boxedData = headerData.map((data, i) => <div className="col-header" key={i}>{data}</div>);
  return (
    <div className="col-container">
      {boxedData}
      <div className="col-header">
        <button onClick={changeButton}>{button ? "+" : "-"}</button>
      </div>
    </div>
  )
};

Header.defaultProps = {
  headerData: ["30%", "$2000000", "85%"]
}

Header.propTypes = {
  button: PropTypes.bool.isRequired,
  headerData: PropTypes.array,
  changeButton: PropTypes.func.isRequired
};

export default Header;

