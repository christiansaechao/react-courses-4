import React from 'react'

/**
 * 1. Title
 * 2. Login / Signup Button
 */

export const Navbar = () => {
  return (
    <div className="w-full flex flex-row gap-2 justify-between items-center bg-red-500">
        <h1 className="w-4/5 text-center">DoorDash</h1>
        <div className="flex gap-4">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}
