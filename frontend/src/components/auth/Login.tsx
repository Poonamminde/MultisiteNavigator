import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "./LoginForm"
import { loginUser } from "../../services/authService"

const LoginPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
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
    if (!formData.email || !formData.password) {
      setError("All fields are required")
      return
    }

    try {
      setLoading(true)

      const data = await loginUser({
        email: formData.email,
        password: formData.password
      })

      localStorage.setItem("token", data.token)

      navigate("/websites")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <LoginForm
        formData={formData}
        error={error}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default LoginPage