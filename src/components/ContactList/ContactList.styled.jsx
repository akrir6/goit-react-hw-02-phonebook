import styled from "@emotion/styled";

export const List = styled.ul`
    /* margin-top: 8px;     */
    color:#1F4E49;
    font-size: large;
`

export const ListItem = styled.li`
    display: flex;
    margin-top: 4px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    background-color: #F2F2F2;
    border-bottom:1px solid #1F4E49;

    :hover,
    :focus{
        border-color: #FF931E;
        background-color: #CCEBE8;
}
`
    


export const Text = styled.span`
    padding:  8px;
 `
export const Button = styled.button`
    margin: 0;
    padding: 4px;
    background-color: #1F4E49;
    color: #F2F2F2;
    border:none;
    font-size: small;
    outline: none;
    cursor: pointer;

    :hover,
    :focus {
        background-color: #FF931E;
    }
`