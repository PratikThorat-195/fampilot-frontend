import { useState, useEffect } from 'react'
import { registerUser } from '../services/authServices'

function Register() {

    // Form state
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Password visibility
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Notification state
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    // Registration handler
    const handleSubmit = async (event) => {

        event.preventDefault()

        setError('')
        setSuccess('')

        if (password.length < 8) {
            setError('Password must be at least 8 characters')
            return
        }

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

            setLoading(true)

            const response = await registerUser(registrationData)

            setSuccess(response.data.message)

            // Clear form after successful registration
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')

        } catch (error) {

            if (error.response) {
                setError(
                    error.response.data.message || 'Registration failed'
                )
            } else {
                setError('Unable to connect to server')
            }

        } finally {
            setLoading(false)
        }
    }

    // Success notification timer
    useEffect(() => {

        if (!success) return

        const timer = setTimeout(() => {
            setSuccess('')
        }, 5000)

        return () => clearTimeout(timer)

    }, [success])

    // Common input styling
    const inputClass = `
    w-full
    rounded-lg
    border border-[#E3E2E9]
    bg-white
    px-3.5 py-3
    text-sm text-[#292631]
    placeholder:text-[#A5A2AD]
    outline-none
    transition-all duration-200
    hover:border-[#C8C2D4]
    focus:border-[#6654A5]
    focus:ring-4 focus:ring-[#6654A5]/10
`

    const labelClass = `
    mb-2 block
    text-xs font-semibold
    tracking-wide
    text-[#45424D]
`

    return (
        <div className="relative mx-auto w-full max-w-[460px] rounded-2xl bg-white">

            {/* Success Notification */}
            {success && (
                <div className="fixed left-1/2 top-6 z-[100] w-[min(380px,90vw)] -translate-x-1/2 rounded-xl border border-green-200 bg-white p-4 shadow-xl">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-lg font-bold text-green-600">
                            ✓
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#292631]">
                                Registration Successful
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                Your account has been created successfully.
                            </p>
                        </div>

                    </div>

                </div>
            )}

            {/* Registration Form Card */}
            <div className="w-full rounded-2xl border border-[#EAE6EF] bg-white px-5 py-5 shadow-[0_12px_40px_-20px_rgba(48,35,68,0.18)] sm:px-7 sm:py-6">

                {/* Heading */}
                <div className="mb-7">

                    <h2 className="text-center text-2xl font-bold tracking-tight text-[#292631] sm:text-[28px]">
                        Create your account
                    </h2>

                    <p className="mt-2 text-center text-sm text-[#85818D]">
                        Start organizing your family's future with FamPilot.
                    </p>

                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    {/* First Name and Last Name */}
                    <div className="mb-5 grid grid-cols-2 gap-3">

                        <div>
                            <label htmlFor="firstName" className={labelClass}>
                                First Name
                            </label>

                            <input
                                id="firstName"
                                type="text"
                                placeholder="Enter first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={inputClass}
                                autoComplete="given-name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className={labelClass}>
                                Last Name
                            </label>

                            <input
                                id="lastName"
                                type="text"
                                placeholder="Enter last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={inputClass}
                                autoComplete="family-name"
                                required
                            />
                        </div>

                    </div>

                    {/* Email */}
                    <div className="mb-5">

                        <label htmlFor="email" className={labelClass}>
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClass}
                            autoComplete="email"
                            required
                        />

                    </div>

                    {/* Password */}
                    <div className="mb-5">

                        <label htmlFor="password" className={labelClass}>
                            Password
                        </label>

                        <div className="relative">

                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Minimum 8 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`${inputClass} pr-16`}
                                autoComplete="new-password"
                                minLength={8}
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6654A5] hover:text-[#493875]"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>

                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">

                        <label htmlFor="confirmPassword" className={labelClass}>
                            Confirm Password
                        </label>

                        <div className="relative">

                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Re-enter your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`${inputClass} pr-16`}
                                autoComplete="new-password"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6654A5] hover:text-[#493875]"
                            >
                                {showConfirmPassword ? 'Hide' : 'Show'}
                            </button>

                        </div>

                    </div>

                    {/* Terms */}
                    <div className="mb-6 flex items-start gap-2">

                        <input
                            id="terms"
                            type="checkbox"
                            required
                            className="mt-0.5 h-4 w-4 cursor-pointer accent-[#6654A5]"
                        />

                        <label
                            htmlFor="terms"
                            className="text-xs leading-5 text-[#77737E]"
                        >
                            I agree to the{' '}
                            <a href="#terms" className="font-semibold text-[#6654A5] underline underline-offset-2">
                                Terms and Conditions
                            </a>
                            {' '}and Privacy Policy.
                        </label>

                    </div>

                    {/* Create Account Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full rounded-lg
                            bg-[#302344]
                            px-5 py-3.5
                            text-sm font-semibold text-white
                            shadow-sm
                            transition-all duration-200
                            hover:-translate-y-0.5
                            hover:bg-[#49345F]
                            hover:shadow-md
                            focus:outline-none
                            focus:ring-4 focus:ring-[#6654A5]/20
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>

                </form>

                {/* Sign In */}
                <div className="mt-7 border-t border-[#ECEAF0] pt-6 text-center">

                    <p className="text-sm text-[#85818D]">
                        Already have an account?{' '}

                        <button
                            type="button"
                            className="font-semibold text-[#6654A5] transition hover:text-[#493875]"
                        >
                            Sign In
                        </button>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Register


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// import { useState, useEffect } from 'react'
// import registrationBg from '../assets/registration-Background.png'
// import { registerUser } from '../services/authServices'

// function Register() {

//     // Form values
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')

//     // Password visibility
//     const [showPassword, setShowPassword] = useState(false)
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//     // Validation message
//     const [error, setError] = useState('')
//     const [success, setSuccess] = useState('')

//     const handleSubmit = async (event) => {

//         event.preventDefault()

//         // Clear previous error
//         setError('')
//         setSuccess('')

//         // Password validation
//         if (password !== confirmPassword) {
//             setError('Password and Confirm Password do not match')
//             return
//         }

//         const registrationData = {
//             firstName,
//             lastName,
//             email,
//             password
//         }

//         try {
//             const response = await registerUser(registrationData)

//             console.log('Backend Response:', response.data)
            
//         //  Show success notification only after backend success
//             setSuccess(response.data.message)
        
//         }catch (error) {
//             console.log('Registration failed:', error)
//              if (error.response) {
//             setError(error.response.data.message || 'Registration failed')
//             } 
//             else {
//             setError('Unable to connect to server')
//         }
//         }
//     }

//     useEffect(() => {
//         if (!success) {
//             return
//         }

//     const timer = setTimeout(() => {
//         setSuccess('')
//     }, 5000)

//     return () => clearTimeout(timer)
//         }, [success])

//     return (
        
//         <main
//             className="min-h-screen bg-cover bg-center bg-no-repeat"
//             style={{
//                 backgroundImage: `url(${registrationBg})`
//             }}
//         >

//              {/* Success Notification */}
//             {success && (
//                 <div className="fixed left-1/2 top-24 z-[100] w-[380px] -translate-x-1/2 overflow-hidden rounded-2xl border border-green-200 bg-white/95 shadow-2xl backdrop-blur-xl">

//                 <div className="flex items-center gap-4 px-5 py-4">

//                     {/* Success Icon */}
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-600">
//                         ✓
//                     </div>

//                     {/* Message */}
//                     <div>
//                         <p className="text-sm font-semibold text-gray-900">
//                             Registration Successful
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                             Your account has been created successfully.
//                         </p>
//                     </div>

//                 </div>

//                 {/* Progress Bar */}
//                 <div className="h-1 w-full bg-green-100">
//                     <div
//                         className="h-full w-full origin-left bg-green-500"
//                         style={{
//                             animation: 'toastProgress 4s linear forwards'
//                         }}
//                      />
//                 </div>

//             </div>
//             )}

//             {/* Background overlay */}
//             <div className="min-h-screen bg-white/5">

//                 {/* Main Content */}
//                 <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-end px-6 pt-20 lg:px-10">

//                     {/* Registration Card */}
//                     <form
//                         onSubmit={handleSubmit}
//                         className="
//                             w-full
//                             max-w-sm
//                             rounded-3xl
//                             border
//                             border-purple/60
//                             p-6
//                             shadow-2xl
//                             shadow-purple-900/10
//                             backdrop-blur-xl
//                         "
//                     >

//                         {/* Heading */}
//                         <div className="mb-5 text-center">

//                             <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//                                 Create Your Account
//                             </h2>

//                             <p className="mt-1 text-xs text-gray-600">
//                                 Join FamPilot and simplify family life
//                             </p>

//                         </div>


//                         {/* Error Message */}
//                         {error && (
//                             <div
//                                 className="
//                                     mb-4
//                                     rounded-lg
//                                     border
//                                     border-red-200
//                                     bg-red-50/90
//                                     px-3
//                                     py-2
//                                     text-xs
//                                     font-medium
//                                     text-red-700
//                                 "
//                             >
//                                 {error}
//                             </div>
//                         )}


//                         {/* First Name + Last Name */}
//                         <div className="mb-3 grid grid-cols-2 gap-3">

//                             {/* First Name */}
//                             <div>

//                                 <label
//                                     htmlFor="firstName"
//                                     className="mb-1 block text-xs font-semibold text-gray-700"
//                                 >
//                                     First Name
//                                 </label>

//                                 <input
//                                     id="firstName"
//                                     type="text"
//                                     placeholder="First name"
//                                     value={firstName}
//                                     onChange={(event) =>
//                                         setFirstName(event.target.value)
//                                     }
//                                     className="
//                                         w-full
//                                         rounded-lg
//                                         border
//                                         border-white/70
//                                         bg-white/80
//                                         px-3
//                                         py-2.5
//                                         text-xs
//                                         text-gray-900
//                                         outline-none
//                                         transition
//                                         placeholder:text-gray-400
//                                         focus:border-purple-600
//                                         focus:bg-white
//                                         focus:ring-2
//                                         focus:ring-purple-200
//                                     "
//                                 />

//                             </div>


//                             {/* Last Name */}
//                             <div>

//                                 <label
//                                     htmlFor="lastName"
//                                     className="mb-1 block text-xs font-semibold text-gray-700"
//                                 >
//                                     Last Name
//                                 </label>

//                                 <input
//                                     id="lastName"
//                                     type="text"
//                                     placeholder="Last name"
//                                     value={lastName}
//                                     onChange={(event) =>
//                                         setLastName(event.target.value)
//                                     }
//                                     className="
//                                         w-full
//                                         rounded-lg
//                                         border
//                                         border-white/70
//                                         bg-white/80
//                                         px-3
//                                         py-2.5
//                                         text-xs
//                                         text-gray-900
//                                         outline-none
//                                         transition
//                                         placeholder:text-gray-400
//                                         focus:border-purple-600
//                                         focus:bg-white
//                                         focus:ring-2
//                                         focus:ring-purple-200
//                                     "
//                                 />

//                             </div>

//                         </div>


//                         {/* Email */}
//                         <div className="mb-3">

//                             <label
//                                 htmlFor="email"
//                                 className="mb-1 block text-xs font-semibold text-gray-700"
//                             >
//                                 Email Address
//                             </label>

//                             <input
//                                 id="email"
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(event) =>
//                                     setEmail(event.target.value)
//                                 }
//                                 className="
//                                     w-full
//                                     rounded-lg
//                                     border
//                                     border-white/70
//                                     bg-white/80
//                                     px-3
//                                     py-2.5
//                                     text-xs
//                                     text-gray-900
//                                     outline-none
//                                     transition
//                                     placeholder:text-gray-400
//                                     focus:border-purple-600
//                                     focus:bg-white
//                                     focus:ring-2
//                                     focus:ring-purple-200
//                                 "
//                             />

//                         </div>


//                         {/* Password */}
//                         <div className="mb-3">

//                             <label
//                                 htmlFor="password"
//                                 className="mb-1 block text-xs font-semibold text-gray-700"
//                             >
//                                 Password
//                             </label>

//                             <div className="relative">

//                                 <input
//                                     id="password"
//                                     type={
//                                         showPassword
//                                             ? 'text'
//                                             : 'password'
//                                     }
//                                     placeholder="Create a password"
//                                     value={password}
//                                     onChange={(event) =>
//                                         setPassword(event.target.value)
//                                     }
//                                     className="
//                                         w-full
//                                         rounded-lg
//                                         border
//                                         border-white/70
//                                         bg-white/80
//                                         px-3
//                                         py-2.5
//                                         pr-10
//                                         text-xs
//                                         text-gray-900
//                                         outline-none
//                                         transition
//                                         placeholder:text-gray-400
//                                         focus:border-purple-600
//                                         focus:bg-white
//                                         focus:ring-2
//                                         focus:ring-purple-200
//                                     "
//                                 />

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setShowPassword(!showPassword)
//                                     }
//                                     className="
//                                         absolute
//                                         right-2
//                                         top-1/2
//                                         -translate-y-1/2
//                                         rounded-md
//                                         px-1
//                                         text-xs
//                                         text-gray-500
//                                         transition
//                                         hover:bg-purple-50
//                                         hover:text-purple-700
//                                     "
//                                 >
//                                     {showPassword ? '🙈' : '👁️'}
//                                 </button>

//                             </div>

//                         </div>


//                         {/* Confirm Password */}
//                         <div className="mb-4">

//                             <label
//                                 htmlFor="confirmPassword"
//                                 className="mb-1 block text-xs font-semibold text-gray-700"
//                             >
//                                 Confirm Password
//                             </label>

//                             <div className="relative">

//                                 <input
//                                     id="confirmPassword"
//                                     type={
//                                         showConfirmPassword
//                                             ? 'text'
//                                             : 'password'
//                                     }
//                                     placeholder="Confirm your password"
//                                     value={confirmPassword}
//                                     onChange={(event) =>
//                                         setConfirmPassword(
//                                             event.target.value
//                                         )
//                                     }
//                                     className="
//                                         w-full
//                                         rounded-lg
//                                         border
//                                         border-white/70
//                                         bg-white/80
//                                         px-3
//                                         py-2.5
//                                         pr-10
//                                         text-xs
//                                         text-gray-900
//                                         outline-none
//                                         transition
//                                         placeholder:text-gray-400
//                                         focus:border-purple-600
//                                         focus:bg-white
//                                         focus:ring-2
//                                         focus:ring-purple-200
//                                     "
//                                 />

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setShowConfirmPassword(
//                                             !showConfirmPassword
//                                         )
//                                     }
//                                     className="
//                                         absolute
//                                         right-2
//                                         top-1/2
//                                         -translate-y-1/2
//                                         rounded-md
//                                         px-1
//                                         text-xs
//                                         text-gray-500
//                                         transition
//                                         hover:bg-purple-50
//                                         hover:text-purple-700
//                                     "
//                                 >
//                                     {showConfirmPassword
//                                         ? '🙈'
//                                         : '👁️'}
//                                 </button>

//                             </div>

//                         </div>


//                         {/* Create Account Button */}
//                         <button
//                             type="submit"
//                             className="
//                                 w-full
//                                 rounded-lg
//                                 bg-gradient-to-r
//                                 from-purple-700
//                                 to-pink-600
//                                 px-4
//                                 py-2.5
//                                 text-xs
//                                 font-semibold
//                                 text-white
//                                 shadow-md
//                                 shadow-purple-300/30
//                                 transition
//                                 duration-200
//                                 hover:-translate-y-0.5
//                                 hover:from-purple-800
//                                 hover:to-pink-700
//                                 hover:shadow-lg
//                                 focus:outline-none
//                                 focus:ring-2
//                                 focus:ring-purple-300
//                                 active:translate-y-0
//                             "
//                         >
//                             Create Account
//                         </button>


//                         {/* Sign In */}
//                         <p className="mt-3 text-center text-xs text-gray-600">

//                             Already have an account?{' '}

//                             <button
//                                 type="button"
//                                 className="
//                                     font-semibold
//                                     text-purple-700
//                                     transition
//                                     hover:text-purple-900
//                                 "
//                             >
//                                 Sign In
//                             </button>

//                         </p>

//                     </form>

//                 </div>

//             </div>
        
//         </main>
//     )
// }

// export default Register