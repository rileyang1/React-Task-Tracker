import PropTypes from 'prop-types'
import Button from './Button.js'

// Header Function component
const Header = ({ title, onAdd, showAdd }) => {
    // return header as className for CSS styling and Button component
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color = {!showAdd ? 'green' : 'red'}
                text = {!showAdd ? 'Add' : 'Close'}
                onClick={onAdd}
            />
        </header>
    )
}

// Default header component if nothing passed as argument
Header.defaultProps = {
    title: 'Task Tracker',
}
// Typechecking
Header.propTypes = { 
    title: PropTypes.string.isRequired,
}

export default Header
