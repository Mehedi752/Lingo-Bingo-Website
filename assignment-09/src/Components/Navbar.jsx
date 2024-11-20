import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo3.jpg'
import { AuthContext } from '../AuthProvider';
import { useContext } from 'react';
import userImg from '../../images/user.jpg'
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log('User signed out')
      })
      .catch(error => {
        // console.log(error)
      })
  };

  return (
    <div className="bg-[#126C4D] pb-5">
      <div className='pt-8 flex justify-between container mx-auto'>

        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow
        flex gap-3 items-center text-black text-xs font-normal">
                <li><Link to='/' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>Home</Link></li>
                <li><Link to='/learning' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>Start Learning</Link></li>
                <li><Link to='/tutorials' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>Tutorials</Link></li>
                <li><Link to='/about' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>About</Link></li>
                {user && (
                  <li><Link to={"/profile"} className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>My Profile</Link></li>
                )}
              </ul>
            </div>
            <div className="hidden lg:flex gap-2 items-center">
              <img src={logo} alt="" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-white">Learn Vocabulary</h3>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-3 items-center text-white text-[14px]  font-normal">
              <li><Link to='/' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>Home</Link></li>
              <li><Link to='/learning' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>Start Learning</Link></li>
              <li><Link to='/tutorials' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>Tutorials</Link></li>
              <li><Link to='/about' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>About</Link></li>
              {user && (
                <li><Link to={"/profile"} className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none'>My Profile</Link></li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            <div className='flex gap-2 items-center'>
              {
                user && user.photoURL ? (
                  <div className="relative group">
                    <img src={user.photoURL} alt='' className='w-12 h-12 rounded-full bg-[#706f6f]' />
                    <div className="absolute top-12 -right-7 w-[100px] text-center text-white bg-gradient-to-r from-pink-500 to-orange-500 p-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {user.displayName}
                    </div>
                  </div>
                ) : (
                  <img src={userImg} alt='' className='w-12 h-12 rounded-full' />
                )
              }
              {user && user.email ? (
                <button
                  onClick={handleLogOut}
                  className='bg-gradient-to-r from-cyan-500 to-blue-500  btn border-none rounded-none btn-neutral text-white'
                >
                  Logout
                </button>
              ) : (
                <Link
                  className='bg-gradient-to-r from-cyan-500 to-blue-500 border-none btn rounded-none btn-neutral text-white'
                  to={'/auth/login'}
                >
                  Login
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
