import { useState, useContext } from "react"
import { ThemeContext } from '../../contexts/theme.context'
import { Form, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from './../../services/auth.services'
import uploadServices from "../../services/upload.services"
import '../SignUpForm/SignUpForm.css'

const SignUpForm = () => {

    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const [loadingImage, setLoadingImage] = useState(false)
    const [signUpData, setSignUpData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()


    const handleInputChange = e => {
        const { value, name } = e.target
        setSignUpData({ ...signUpData, [name]: value })
    }

    const handleNewUserSubmit = e => {
        e.preventDefault()

        authService
            .signup(signUpData)
            .then(() => navigate('/login'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setSignUpData({ ...signUpData, avatar: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const { username, password, email, firstName, lastName } = signUpData

    return (
        <Container className="centered-content">


            <Form onSubmit={handleNewUserSubmit}>
                <h2 className={variant === 'light' ? 'login-title-light' : 'login-title-dark'}>Crear Cuenta</h2>

                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Control className={variant === 'light' ? 'transparent-input-light name-input-light' : 'transparent-input-dark name-input-dark'} placeholder='nombre' type="text" autoComplete="username" value={firstName} onChange={handleInputChange} name="firstName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Control type="text" className={variant === 'light' ? 'transparent-input-light name-input-light' : 'transparent-input-dark name-input-dark'} placeholder='apellido' autoComplete="username" value={lastName} onChange={handleInputChange} name="lastName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Control className={variant === 'light' ? 'transparent-input-light name-input-light' : 'transparent-input-dark name-input-dark'} placeholder="nombre de usuario" type="text" autoComplete="username" value={username} onChange={handleInputChange} name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label className="avatar-input">Avatar</Form.Label>
                    <Form.Control className={variant === 'light' ? 'transparent-input-light avatar-input-light' : 'transparent-input-dark avatar-input-dark'} type="file" onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                        className={variant === 'light' ? 'transparent-input-light email-input-light' : 'transparent-input-dark email-input-dark'}
                        placeholder="email" type="email" autoComplete="username" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                        className={variant === 'light' ? 'transparent-input-light password-input-light' : 'transparent-input-dark password-input-dark'}
                        placeholder="contraseña" type="password" autoComplete="current-password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                <div className="d-grid">
                    <Button className={variant === 'light' ? 'custom-button light' : 'custom-button dark'} type="submit" disabled={loadingImage}>{loadingImage ? 'Loading image...' : 'Listo ➜'}</Button>
                </div>

            </Form>
            <p className={variant === 'light' ? 'signup-footer-light' : 'signup-footer-dark'}>¿Ya tienes cuenta? <a className={variant === 'light' ? 'login-link-light' : 'login-link-dark'} href="/login">¡Inicia sesión!</a></p>
        </Container>
    )
}

export default SignUpForm