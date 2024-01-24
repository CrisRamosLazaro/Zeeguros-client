import { Button, Container } from "react-bootstrap"
import '../HomePage/HomePage.css'
import { useNavigate } from "react-router-dom"
import logo from './../../assets/images/Your-Logo-here.png'

const HomePage = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="background">
                <div className="background-horizontal">

                </div>
                <div className="background-vertical">

                </div>
            </div>
            <Container className="centered-content">
                <img src={logo} alt='Zeeguros Logo' />
                <Button onClick={() => navigate(`/login`)} className="custom-home-button white-button">Iniciar sesión</Button>
                <p className="no-margin">¿Todavía no tienes cuenta?</p>
                <Button onClick={() => navigate(`/signup`)} className="custom-home-button transparent-button">Crear cuenta</Button>
            </Container>
        </>
    )
}

export default HomePage
