import { useState, useEffect } from 'react'
import registrationBg from '../assets/registration-Background.png'
import { registerUser } from '../services/authServices'

function Register() {

    // Form values
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Password visibility
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Validation message
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (event) => {

        event.preventDefault()

        // Clear previous error
        setError('')
        setSuccess('')

        // Password validation
        if (password !== confirmPassword) {
            setError('Password and Confirm Password do not match')
            return
        }

        const registrationData = {
            firstName,
            lastName,
            email,
            password
        }

        try {
            const response = await registerUser(registrationData)

            console.log('Backend Response:', response.data)
            
        //  Show success notification only after backend success
            setSuccess(response.data.message)
        
        }catch (error) {
            console.log('Registration failed:', error)
             if (error.response) {
            setError(error.response.data.message || 'Registration failed')
            } 
            else {
            setError('Unable to connect to server')
        }
        }
    }

    useEffect(() => {
        if (!success) {
            return
        }

    const timer = setTimeout(() => {
        setSuccess('')
    }, 5000)

    return () => clearTimeout(timer)
        }, [success])

    return (
        
        <main
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${registrationBg})`
            }}
        >

             {/* Success Notification */}
            {success && (
                <div className="fixed left-1/2 top-24 z-[100] w-[380px] -translate-x-1/2 overflow-hidden rounded-2xl border border-green-200 bg-white/95 shadow-2xl backdrop-blur-xl">

                <div className="flex items-center gap-4 px-5 py-4">

                    {/* Success Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-600">
                        ✓
                    </div>

                    {/* Message */}
                    <div>
                        <p className="text-sm font-semibold text-gray-900">
                            Registration Successful
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                            Your account has been created successfully.
                        </p>
                    </div>

                </div>

                {/* Progress Bar */}
                <div className="h-1 w-full bg-green-100">
                    <div
                        className="h-full w-full origin-left bg-green-500"
                        style={{
                            animation: 'toastProgress 4s linear forwards'
                        }}
                     />
                </div>

            </div>
            )}

            {/* Background overlay */}
            <div className="min-h-screen bg-white/5">

                {/* Main Content */}
                <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-end px-6 pt-20 lg:px-10">

                    {/* Registration Card */}
                    <form
                        onSubmit={handleSubmit}
                        className="
                            w-full
                            max-w-sm
                            rounded-3xl
                            border
                            border-purple/60
                            p-6
                            shadow-2xl
                            shadow-purple-900/10
                            backdrop-blur-xl
                        "
                    >

                        {/* Heading */}
                        <div className="mb-5 text-center">

                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Create Your Account
                            </h2>

                            <p className="mt-1 text-xs text-gray-600">
                                Join FamPilot and simplify family life
                            </p>

                        </div>


                        {/* Error Message */}
                        {error && (
                            <div
                                className="
                                    mb-4
                                    rounded-lg
                                    border
                                    border-red-200
                                    bg-red-50/90
                                    px-3
                                    py-2
                                    text-xs
                                    font-medium
                                    text-red-700
                                "
                            >
                                {error}
                            </div>
                        )}


                        {/* First Name + Last Name */}
                        <div className="mb-3 grid grid-cols-2 gap-3">

                            {/* First Name */}
                            <div>

                                <label
                                    htmlFor="firstName"
                                    className="mb-1 block text-xs font-semibold text-gray-700"
                                >
                                    First Name
                                </label>

                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(event) =>
                                        setFirstName(event.target.value)
                                    }
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-white/70
                                        bg-white/80
                                        px-3
                                        py-2.5
                                        text-xs
                                        text-gray-900
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-purple-600
                                        focus:bg-white
                                        focus:ring-2
                                        focus:ring-purple-200
                                    "
                                />

                            </div>


                            {/* Last Name */}
                            <div>

                                <label
                                    htmlFor="lastName"
                                    className="mb-1 block text-xs font-semibold text-gray-700"
                                >
                                    Last Name
                                </label>

                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(event) =>
                                        setLastName(event.target.value)
                                    }
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-white/70
                                        bg-white/80
                                        px-3
                                        py-2.5
                                        text-xs
                                        text-gray-900
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-purple-600
                                        focus:bg-white
                                        focus:ring-2
                                        focus:ring-purple-200
                                    "
                                />

                            </div>

                        </div>


                        {/* Email */}
                        <div className="mb-3">

                            <label
                                htmlFor="email"
                                className="mb-1 block text-xs font-semibold text-gray-700"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-white/70
                                    bg-white/80
                                    px-3
                                    py-2.5
                                    text-xs
                                    text-gray-900
                                    outline-none
                                    transition
                                    placeholder:text-gray-400
                                    focus:border-purple-600
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-purple-200
                                "
                            />

                        </div>


                        {/* Password */}
                        <div className="mb-3">

                            <label
                                htmlFor="password"
                                className="mb-1 block text-xs font-semibold text-gray-700"
                            >
                                Password
                            </label>

                            <div className="relative">

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-white/70
                                        bg-white/80
                                        px-3
                                        py-2.5
                                        pr-10
                                        text-xs
                                        text-gray-900
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-purple-600
                                        focus:bg-white
                                        focus:ring-2
                                        focus:ring-purple-200
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="
                                        absolute
                                        right-2
                                        top-1/2
                                        -translate-y-1/2
                                        rounded-md
                                        px-1
                                        text-xs
                                        text-gray-500
                                        transition
                                        hover:bg-purple-50
                                        hover:text-purple-700
                                    "
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </button>

                            </div>

                        </div>


                        {/* Confirm Password */}
                        <div className="mb-4">

                            <label
                                htmlFor="confirmPassword"
                                className="mb-1 block text-xs font-semibold text-gray-700"
                            >
                                Confirm Password
                            </label>

                            <div className="relative">

                                <input
                                    id="confirmPassword"
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setConfirmPassword(
                                            event.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-white/70
                                        bg-white/80
                                        px-3
                                        py-2.5
                                        pr-10
                                        text-xs
                                        text-gray-900
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-purple-600
                                        focus:bg-white
                                        focus:ring-2
                                        focus:ring-purple-200
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="
                                        absolute
                                        right-2
                                        top-1/2
                                        -translate-y-1/2
                                        rounded-md
                                        px-1
                                        text-xs
                                        text-gray-500
                                        transition
                                        hover:bg-purple-50
                                        hover:text-purple-700
                                    "
                                >
                                    {showConfirmPassword
                                        ? '🙈'
                                        : '👁️'}
                                </button>

                            </div>

                        </div>


                        {/* Create Account Button */}
                        <button
                            type="submit"
                            className="
                                w-full
                                rounded-lg
                                bg-gradient-to-r
                                from-purple-700
                                to-pink-600
                                px-4
                                py-2.5
                                text-xs
                                font-semibold
                                text-white
                                shadow-md
                                shadow-purple-300/30
                                transition
                                duration-200
                                hover:-translate-y-0.5
                                hover:from-purple-800
                                hover:to-pink-700
                                hover:shadow-lg
                                focus:outline-none
                                focus:ring-2
                                focus:ring-purple-300
                                active:translate-y-0
                            "
                        >
                            Create Account
                        </button>


                        {/* Sign In */}
                        <p className="mt-3 text-center text-xs text-gray-600">

                            Already have an account?{' '}

                            <button
                                type="button"
                                className="
                                    font-semibold
                                    text-purple-700
                                    transition
                                    hover:text-purple-900
                                "
                            >
                                Sign In
                            </button>

                        </p>

                    </form>

                </div>

            </div>
        
        </main>
    )
}

export default Register