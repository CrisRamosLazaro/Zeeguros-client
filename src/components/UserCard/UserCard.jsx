import { Card, Modal, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import userService from "../../services/user.services"
import { useState } from "react"

const UserCard = ({ firstName, lastName, avatar, _id, updateList }) => {
    const [showModal, setShowModal] = useState(false)
    const handleDelete = event => {
        event.preventDefault()

        userService
            .deleteOneUser(_id)
            .then(() => { updateList() })
            .catch(err => console.log(err))
    }
    return (
        <Card className="mb-3 UserCard" >
            <Card.Img variant="top" className="UserCardImage" src={avatar} />
            <Card.Body>
                <h4>{firstName} {lastName}</h4>
                <Link to={`/users/${_id}`} className="btn btn-dark">Detalles</Link>
                <Link to={`/users/edit/${_id}`} className="btn btn-dark">Editar</Link>
                <Button variant="dark" onClick={() => setShowModal(true)}>Borrar</Button>


            </Card.Body>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Estas seguro?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link >
                        <Button variant="dark" onClick={handleDelete}>Borrar</Button>
                    </Link>
                </Modal.Body>
            </Modal>
        </Card>
    )
}
export default UserCard