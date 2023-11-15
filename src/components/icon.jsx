import PropTypes from 'prop-types';
import 'devicon';

export default function Icon( { icon } ) {
  return (
    <i className={`${icon}`}></i>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}