import './Navigation.css'
import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { ThemeContext } from '../../contexts/theme.context'
import Icon from './../../assets/images/weather.png'
import Icon2 from './../../assets/images/weather2.png'

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogout = () => {
        logout(navigate)
        navigate('/login')
    }
    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'


    return (
        <Navbar bg={variant} variant={variant} expand="lg" className={variant === 'ligth' ? 'Navbar Navbar-ligth d-none d-md-block' : 'Navbar Navbar-dark d-none d-md-block'}
        >
            <Container>
                <Navbar.Brand >ZEEGUROS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            user
                                ?
                                <>

                                    <Nav.Link as="span" >
                                        <Link to="/profile" className="navbarLink">¡Hola, {user.username}!</Link>
                                    </Nav.Link>
                                    <Nav.Link className="navbarLink logout" as="span" onClick={handleLogout}>Cerrar sesión</Nav.Link>
                                    <Nav>
                                        {
                                            user.role === 'ADMIN'
                                                ?
                                                <>
                                                    <Nav.Link as="span" >
                                                        <Link to="/users" className="navbarLink">Usuarios</Link>
                                                    </Nav.Link>
                                                </>

                                                :
                                                <></>
                                        }
                                    </Nav>

                                </>
                                :
                                <>
                                    <Nav.Link as="span">
                                        <Link to="/signup" className="navbarLink">Crear cuenta</Link>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <Link to="/login" className="navbarLink">Iniciar sesión</Link>
                                    </Nav.Link>
                                </>
                        }
                    </Nav>
                    <div className="themeButton">
                        <Navbar.Text onClick={switchTheme}>
                            {
                                theme === 'dark' ?
                                    <img src={Icon} alt='theme'></img> :
                                    <img src={Icon2} alt='theme'></img>
                            }
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigation