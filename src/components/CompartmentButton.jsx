// CompartmentButton.jsx
import './CompartmentButton.css';
import PropTypes from 'prop-types';

const CompartmentButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="compartment-btn flex flex-col items-center justify-center h-12 border rounded-md px-3 py-2 transition hover:shadow-md"
    aria-label={label}
  >
    <span className="text-xs font-medium">{label.toUpperCase()}</span>
  </button>
);

CompartmentButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CompartmentButton;