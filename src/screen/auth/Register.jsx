import React, { useState } from 'react'
import ReusableButton from '../../components/ui/ReusableButton';
import { Lock, Mail, User } from 'lucide-react';
import ReusableForm from '../../components/ui/ReusableForm';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    console.log(formData);
  };

  return (
    <div className='space-y-4'>
      <h1 className='text-white text-4xl text-center font-semibold mb-5'>Register Now</h1>
      <ReusableForm
        type={"text"}
        label={"Name"}
        name={"name"}
        value={formData.name}
        onChange={handleInputChange}
        placeholder={"Enter Your Name"}
        required={true}
        icon={User}
      />
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
          label="Register"
          onClick={handleRegister}
          loading={false}
          icon={Lock}
          variant="primary"
          type="button"
        />
      </div>

      <div>
        <p className="text-md text-center text-gray-400">
          Already have an account? {""}
          <Link to="/login" className="text-[var(--btnColor)] font-medium cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
