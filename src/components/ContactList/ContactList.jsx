import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDeleteClick }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number })=>(
            <li key={id}>
                <span>{name}: </span>
                    <span>{number}</span>
                    <button type="button" onClick={()=>onDeleteClick(id)}>Delete</button>
            </li>
            ))}
        </ul>
    )

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDeleteClick: PropTypes.func.isRequired,
}