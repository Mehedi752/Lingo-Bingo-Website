import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState({})
  //   console.log(location)

  const handleLogin = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')

    signInUser(email, password)
      .then(result => {
        console.log(result)
        setUser(result.user)
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        // console.log(error)
        setErrorMessage({ ...error, message: error.code })
      })
  }

  return (
    <div className='container mx-auto lg:px-[300px] px-10 lg:py-[100px] py-10'>
      <div className='bg-white px-12 lg:px-[96px] py-8 lg:py-[76px]'>
        <h3 className='text-center text-[#403f3f] text-[24px] lg:text-[35px] font-semibold'>
          Login your account
        </h3>

        <div className='border-t my-12'></div>

        <div className=''>
          <form onSubmit={handleLogin} className=''>
            <div className='form-control mb-6'>
              <label className='label'>
                <span className='label-text text-[#403f3f] text-xl font-semibold mb-4'>
                  Email Address
                </span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email address'
                className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text text-[#403f3f] text-xl font-semibold mb-4'>
                  Password
                </span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                required
              />
              {errorMessage.message ? (
                <p className='text-red-600 mt-3 text-xs'>
                  {errorMessage.message}
                </p>
              ) : (
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              )}
            </div>
            <div className='form-control mt-6 mb-8'>
              <button className='btn text-white bg-gradient-to-r from-cyan-500 to-blue-500  rounded-[5px] border-none'>
                Login
              </button>
            </div>
          </form>
        </div>

        <h3 className='text-[#706f6f] text-center text-base font-semibold'>
          Don’t Have An Account ?{' '}
          <Link className='text-red-600 underline' to={'/auth/register'}>
            Create an account
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default Login
