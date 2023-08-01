import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header(props) {
    return (<header className='App-header'>
        <Button variant="primary" onClick={props.stripedChange}>Colorea filas</Button>
        <Button variant="primary" onClick={props.orderCountry}>Ordena por país</Button>
        <Button variant="primary" onClick={props.restore} >Restaurar estado inicial</Button>
        <Form.Control className='imput-mg' onChange={props.filter} size="lg" type="text" placeholder="Filtrar por país" />
    </header>)
}

export default Header;