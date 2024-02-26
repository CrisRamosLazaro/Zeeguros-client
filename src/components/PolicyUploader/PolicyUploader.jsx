import { useState, useContext } from 'react'
import { ThemeContext } from '../../contexts/theme.context'
import { Form, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import uploadServices from "../../services/upload.services"

const PolicyUploader = () => {

    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const [loadingImage, setLoadingImage] = useState(false)
    const [selectedPolicy, setSelectedPolicy] = useState(null)

    const navigate = useNavigate()

    const handlePolicyUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('policyImageData', e.target.files[0])

        uploadServices
            .uploadPolicy(formData)
            .then(res => {
                setSelectedPolicy({ url: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        navigate('/select-broker')
    }


    return (
        <Container className="centered-content">

            <Form onSubmit={handleSubmit}>
                <h2 className={variant === 'light' ? 'login-title-light' : 'login-title-dark'}>Sube tu póliza</h2>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label className="avatar-input" sr-only>Sube aqui tu póliza</Form.Label>
                    <Form.Control className={variant === 'light' ? 'transparent-input-light avatar-input-light' : 'transparent-input-dark avatar-input-dark'} type="file" onChange={handlePolicyUpload} />
                </Form.Group>

                <div className="d-grid">
                    <Button className={variant === 'light' ? 'custom-button light' : 'custom-button dark'} type="submit" disabled={loadingImage}>{loadingImage ? 'Loading image...' : 'Listo ➜'}</Button>
                </div>

            </Form>

        </ Container >
    )
}

export default PolicyUploader