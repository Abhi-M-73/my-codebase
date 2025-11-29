import React, { useEffect, useState } from 'react'
import ReusableButton from '../../components/ui/ReusableButton';
import { Link2, Lock, Mail, Phone, User } from 'lucide-react';
import ReusableForm from '../../components/ui/ReusableForm';
import { Link, useSearchParams } from 'react-router-dom';
import { userRegister } from '../../api/user.api';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../components/ui/Loader';

const Register = () => {
  const params = useSearchParams();
  const referralCode = new URLSearchParams(params[0]).get("ref");
  console.log(referralCode);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    referralCode: referralCode || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const { mutate, isPending } = useMutation({
    mutationFn: userRegister,
    onSuccess: (data) => {
      toast.success(data?.message || "Registration successful!");
    },
    onError: (err) => {
      toast.error(
        err?.response?.data?.message || "Registration failed. Please try again."
      );
    }
  });

  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      sponsorCode: formData.referralCode
    };
    mutate(payload);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (referralCode) {
      setFormData({ ...formData, referralCode: referralCode });
    }
  }, [referralCode]);

  if (isPending) return <Loader />;

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
        type={"number"}
        label={"Phone"}
        name={"phone"}
        value={formData.phone}
        onChange={handleInputChange}
        placeholder={"Enter Your Phone"}
        required={true}
        icon={Phone}
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
      <ReusableForm
        type={"text"}
        label={"Referral Code"}
        name={"referralCode"}
        value={formData.referralCode}
        onChange={handleInputChange}
        placeholder={"Enter Referral Code"}
        required={true}
        icon={Link2}
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
          loading={isPending}
          disabled={isPending}
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
