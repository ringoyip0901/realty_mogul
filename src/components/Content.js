import React from 'react';
import PropTypes from "prop-types";
import "./Components.css"

const Content = (props) => {
  const { showA, showB, contentA, contentB, contentChange } = props;
  return (
    <div className="col-container">
      <div className="col-content">
        <div className="panel A" style={{backgroundColor: showA ? "#ffffff" : "#eeeeee"}}>
          { showA && contentA}
        </div>
      </div>
      <div className="col-content">
        <div className="panel B" onClick={contentChange} style={{backgroundColor: showB ? "#ffffff" : "#eeeeee"}}>
          { showB && contentB}
        </div>
      </div>
    </div>
  )
};

Content.defaultProps = {
  contentA: "Default Content for Panel A",
  contentB: "Default Content for Panel B"
}

Content.propTypes = {
  showA: PropTypes.bool,
  showB: PropTypes.bool,
  contentA: PropTypes.string.isRequired,
  contentB: PropTypes.string.isRequired,
  contentChange: PropTypes.func
};

export default Content;
