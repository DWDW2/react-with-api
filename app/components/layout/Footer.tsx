import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <Link href="https://flowbite.com/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nfac-articles</span>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link>
                        </li>
                        <li>
                            <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</Link>
                        </li>
                        <li>
                            <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </footer>

  )
}