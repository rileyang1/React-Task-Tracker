import PropTypes from 'prop-types'

// Object destructuring
const Button = ({color, text, onClick}) => {
    return(
    <button 
        onClick={onClick} 
        style = {{backgroundColor:color}}
        className = 'btn'
    >
        {text}
    </button>
    )
}

// Typechecking
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button
