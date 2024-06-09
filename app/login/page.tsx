'use client'
import { useAuth } from '../context/AuthContext'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

export default function Login({}: Props) {
  const {isAuthenticated, login} = useAuth()
  const router = useRouter()
  const loginHandler = () => {
    login()
    router.push('/')
  }
  return (
    <div className="w-full max-w-xs mr-auto ml-auto mt-24 mb-24 sm:w-1/2 dark:bg-">
        <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 dark:bg-slate-800 dark:text-white">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="type ypur password" />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => loginHandler()} value='Submit'>
              Submit
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
            </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
        </p>
    </div>
  )
}