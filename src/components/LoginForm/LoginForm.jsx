import { useContext, useState } from "react"
import { ThemeContext } from '../../contexts/theme.context'
import { Form, Button, Container } from "react-bootstrap"
import authService from './../../services/auth.services'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/auth.context"
import '../LoginForm/LoginForm.css'

const LoginForm = () => {

    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()


        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser(() => navigate('/profile'))

            })
            .catch(err => console.log(err))
    }


    const { password, email } = loginData

    return (

        <>
            <Container className="centered-content">

                <Form onSubmit={handleSubmit}>
                    <h2 className={variant === 'light' ? 'login-title-light' : 'login-title-dark'}>Iniciar sesión</h2>
                    <p className={variant === 'light' ? 'login-subtitle-light' : 'login-subtitle-dark'} >Por favor incia sesión para continuar</p>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control
                            className={variant === 'light' ? 'transparent-input-light email-input-light' : 'transparent-input-dark email-input-dark'}
                            type="email" autoComplete="username" placeholder="email" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control
                            className={variant === 'light' ? 'transparent-input-light password-input-light' : 'transparent-input-dark password-input-dark'}
                            type="password" autoComplete="current-password" placeholder="contraseña" value={password} onChange={handleInputChange} name="password" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button className={variant === 'light' ? 'custom-button-light' : 'custom-button-dark'} type="submit" >
                            Iniciar ➜
                        </Button>
                    </div>

                    <p className={variant === 'light' ? 'login-footer-light' : 'login-footer-dark'}>¿Todavía no tienes cuenta? <Link to="/signup" className={variant === 'light' ? 'login-link-light' : 'login-link-dark'}>¡Créate una!</Link></p>

                </Form>
            </Container>
        </>
    )
}

export default LoginForm