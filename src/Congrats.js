import React from 'react';
import PropTypes from 'prop-types'; 
/**
 * @function
 * @param {object} props 
 * @returns {JSX.Element}
*/

const congrats = (props) => {


  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message" className="alert alert-success">
          Congratulations! You guessed the word!
        </span>
      </div>
    )

  } else {
    return <div data-test="component-congrats"></div>

  }

}

congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default congrats