import PropTypes from "prop-types";
import { List, ListItem, Text, Button } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteClick }) => {
    return (
        <List>
            {contacts.map(({ id, name, number })=>(
            <ListItem key={id}>
                <Text>{name}</Text>
                <Text>{number}</Text>
                <Button type="button" onClick={()=>onDeleteClick(id)}>Delete</Button>
            </ListItem>
            ))}
        </List>
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