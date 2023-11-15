import PropTypes from 'prop-types';
import 'devicon';

export default function Icon( { icon } ) {
  <i className={`devicon-${icon}`}></i>
}

Icon.PropTypes = {
  icon: PropTypes.string.isRequired
}