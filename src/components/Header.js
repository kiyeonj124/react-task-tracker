import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'
// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>            
//         </div>
//     )
// }

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' && <Button 
            color={showAdd?'red':'green' }
            text={showAdd?'Close': 'Add' }
            onClick = {onAdd}/>}
            {/* <button className='btn'>Add</button> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color:'red',backgroundColor:'black'
// }

export default Header
