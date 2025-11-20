import React from 'react'
import { Link } from 'react-router-dom'

const AuthMain = ({ inner, name }) => {
    return (
        <div className='bg-gradient-to-br from-gray-900 via-black to-purple-900 min-h-screen w-full flex items-center justify-center md:p-5 p-1 relative overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
                <div className='absolute -bottom-40 -right-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse'></div>
            </div>

            <div className='w-full max-w-6xl flex gap-10 relative z-10'>
                {/* Left Side - Enhanced Design */}
                <div className='w-1/2 md:flex flex-col justify-center hidden '>
                    {/* Logo/Brand */}
                    <div className='mb-12'>
                        <Link to='/' className='flex items-center gap-3 mb-6'>
                            <div className='w-12 h-12 bg-[var(--btnColor)] rounded-lg flex items-center justify-center'>
                                <svg className='w-7 h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                                </svg>
                            </div>
                            <span className='text-3xl font-bold text-white'>{name || 'BrandName'}</span>
                        </Link>

                        <h1 className='text-6xl font-bold text-white mb-6 leading-tight'>
                            Start Your
                            <br />
                            <span className='text-[var(--btnColor)]'>
                                Amazing Journey
                            </span>
                        </h1>
                        <p className='text-gray-300 text-xl leading-relaxed'>
                            Experience the next generation of secure authentication. Built for speed, designed for simplicity.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className='grid grid-cols-3 gap-4 mb-12'>
                        <div className='bg-black bg-opacity-5 backdrop-blur-lg rounded-xl p-4 border border-gray-700'>
                            <div className='text-3xl font-bold text-white mb-1'>50K+</div>
                            <div className='text-[var(--btnColor)] text-sm'>Active Users</div>
                        </div>
                        <div className='bg-black bg-opacity-5 backdrop-blur-lg rounded-xl p-4 border border-gray-700'>
                            <div className='text-3xl font-bold text-white mb-1'>99.9%</div>
                            <div className='text-[var(--btnColor)] text-sm'>Uptime</div>
                        </div>
                        <div className='bg-black bg-opacity-5 backdrop-blur-lg rounded-xl p-4 border border-gray-700'>
                            <div className='text-3xl font-bold text-white mb-1'>4.9★</div>
                            <div className='text-[var(--btnColor)] text-sm'>Rating</div>
                        </div>
                    </div>

                </div>

                {/* Right Side - Form Container with Glass Effect */}
                <div className='md:w-1/2 w-full flex items-center justify-center'>
                    <div className='w-full max-w-xl bg-black/50 bg-opacity-10 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 shadow-2xl'>
                        {inner}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthMain