import style from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({contact, onDelete}) { 
    return (
        <ul>
            {contact.map(({id, name, number}) => (
                <li key = {id}>
                    <p className={style.name}>{name}</p>
                    <p>{number}</p>
                    <button type='buttton' onClick={() =>  onDelete(id)}>Delete v jopu</button>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.idRequired,
            number: PropTypes.string.isRequired
        })
    ),
    onDelete: PropTypes.func.isRequired
}
