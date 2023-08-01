import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function TableUsers(props) {
    // lazy loadin
    const renderList = () => {
        if (props.usersAll.length > 0) {
            return props.usersAll.map((users, index) => <tr key={index}>
                <td><Image src={users.thumbnail} fluid /></td>
                <td>{users.first}</td>
                <td>{users.last}</td>
                <td>{users.country}</td>
                <td><Button variant="primary" onClick={() => props.deleteUser(index)}>Delete</Button></td>
            </tr>)
        } else {
            return <tr>
                <td colSpan={5}>
                    <Spinner animation="border" role="status">
                        <span  className="visually-hidden">Loading...</span>
                    </Spinner>
                </td>
            </tr>
        }
    }

    return (
        <Table striped={props.striped} bordered hover>
            <thead>
                <tr>
                    <th >Foto</th>
                    <th onClick={props.orderName}>Nombre</th>
                    <th onClick={props.orderLastName}>Apellido</th>
                    <th onClick={props.orderCountry}>Pais</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {renderList()}
            </tbody>
        </Table>
    );
}

export default TableUsers;