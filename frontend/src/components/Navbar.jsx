import React from 'react'

function Navbar() {
  return (
    <>
      <nav className=''>
        
        <div>
          <h2 className="">BlogOasis</h2>
        </div>
        <div>
          <ul className=''>
            <li className=''>
              <a href="#">Blog</a>
            </li>
            <li className=''>
              <a href="#">Authors</a>
            </li>
            <li className=''>
              <a href="#">About</a>
            </li>
            <li className=''>
              <a href="#">Contribute</a>
            </li>
            <li className=''>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="">
          <a href="#" className="">
            Create Blog
          </a>
          <a href="#" className="">
            Signup
          </a>
        </div>

      </nav>
    </>
  )
}

export default Navbar