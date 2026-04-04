import React from "react"
import Input from "../common/Input"
import Button from "../common/Button"

interface Props {
  formData: any
  error: string
  loading: boolean
  onChange: (field: string, value: string) => void
  onSubmit: () => void
}

const RegisterForm: React.FC<Props> = ({
  formData,
  error,
  loading,
  onChange,
  onSubmit
}) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
          <Input
            label="Username"
            placeholder="Enter your username"
            type="text"
            required={true}
            value={formData.username}
            onChange={(value) => onChange('username', value)}
          />
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
            onChange={(value) => onChange('password', value)}
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            required={true}
            value={formData.confirmPassword}
            onChange={(value) => onChange('confirmPassword', value)}
          />
        </div>


      <div className="mt-6">
        <Button
          text={loading ? "Registering..." : "Register"}
          start={onSubmit}
          bgColor="bg-[#6C25FF]"
          textColor="text-white"
        />
      </div>
    </div>
  )
}

export default RegisterForm