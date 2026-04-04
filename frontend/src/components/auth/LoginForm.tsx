import React from "react"
import Input from "../common/Input"
import Button from "../common/Button"
import { Link } from "react-router-dom"

interface Props {
  formData: {
    username: string
    email: string
    password: string
  }
  error: string
  loading: boolean
  onChange: (field: string, value: string) => void
  onSubmit: () => void
}

const LoginForm: React.FC<Props> = ({
  formData,
  error,
  loading,
  onChange,
  onSubmit
}) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
      <p className="text-gray-600 mb-6">Sign in to your account</p>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            required={true}
            value={formData.email}
            onChange={(value) => onChange('email', value)}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          required={true}
          value={formData.password}
          onChange={(v) => onChange("password", v)}
        />
      </div>

      <div className="mt-6">
        <Button
          text={loading ? "Logging in..." : "Login"}
          start={onSubmit}
          bgColor="bg-[#6C25FF]"
          textColor="text-white"
        />
      </div>

      <p className="text-center text-gray-600 mt-4 text-sm">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-[#6C25FF] hover:underline font-semibold"
        >
          Register
        </Link>
      </p>
    </div>
  )
}

export default LoginForm