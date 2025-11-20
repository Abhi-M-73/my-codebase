import React, { useState } from 'react'
import ReusableForm from '../../components/ui/ReusableForm';
import { Lock, Mail } from 'lucide-react';
import ReusableButton from '../../components/ui/ReusableButton';
import OtpInputWithButton from '../../components/ui/OtpInputWithButton';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    console.log(formData);
  };

  return (
    <div className='space-y-4'>
      <h1 className='text-white text-4xl text-center font-semibold mb-5'>Welcome Back</h1>
      <ReusableForm
        type={"email"}
        label={"Email"}
        name={"email"}
        value={formData.email}
        onChange={handleInputChange}
        placeholder={"Enter Your Email"}
        required={true}
        icon={Mail}
      />
      <ReusableForm
        type={"password"}
        label={"Password"}
        name={"password"}
        value={formData.password}
        onChange={handleInputChange}
        placeholder={"Enter Your Password"}
        required={true}
        icon={Lock}
      />

      {/* <OtpInputWithButton
        label="Email OTP"
        name="otp"
        value={""}
        onChange={(e) => {}}
        placeholder="Enter OTP"
        required
        icon={Mail}
        buttonLabel="Send"
        loading={false}
        onButtonClick={() => {
          console.log("Send OTP");
        }}
      />; */}

      <div className="w-full mt-4">
        <ReusableButton
          label="Login"
          onClick={handleLogin}
          loading={false}
          icon={Lock}
          variant="primary"
          type="button"
        />
      </div>

      <div>
        <p className="text-md text-center text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-[var(--btnColor)] font-medium cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
