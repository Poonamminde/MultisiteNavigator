import { useState } from "react"
import { useNavigate } from "react-router-dom"
import RegisterForm from "./RegisterForm"
import { registerUser } from "../../services/authService"

const RegisterPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
    setError("")
  }

  const handleSubmit = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setLoading(true)

      await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password
      })

      navigate("/login")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <RegisterForm
        formData={formData}
        error={error}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default RegisterPage