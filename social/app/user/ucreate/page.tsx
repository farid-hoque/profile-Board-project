

import Link from 'next/link'
import React from 'react'
import { userActionCreate } from '@/libs/actions/userActions'
function page() {


    return (
        <div className="w-full max-w-md mx-auto mt-10 pt-10">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 ">
                    Create your account
                </h2>
                <form action={userActionCreate} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">

                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                User Name
                            </label>
                            <input
                                type="text"
                                // id="firstName"
                                name='name'
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition outline-none"
                            // placeholder="John"
                            // required
                            />
                        </div>


                        <div>

                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                // id="email"
                                name='email'
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition outline-none"
                            // placeholder="you@example.com"
                            // required
                            />
                        </div>

                        <div>
                            {/* div four */}
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                location
                            </label>
                            <input
                                type="text"
                                // id="password"
                                name='location'
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition outline-none"
                                // placeholder="••••••••"
                                minLength={8}
                            // required
                            />
                        </div>

                        <div>

                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone
                            </label>
                            <input
                                type='text'
                                // id="password"
                                name='phone'
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition outline-none"
                                // placeholder="••••••••"
                                minLength={8}
                            // required
                            />
                        </div>

                        <div>

                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                profile
                            </label>
                            <input
                                type="file"
                                // id="password"
                                name='photo'
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition outline-none"
                            // placeholder="••••••••"
                            // minLength={8}
                            // required
                            />
                        </div>
                    </div>

                    {/* only button tag  */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-lg transition transform hover:scale-[1.01] active:scale-[0.98] shadow-md mouse-pointer cursor-pointer"
                    >
                        Create Account

                    </button>
                    <Link className='border py-1 px-2 border-amber-600 text-rose-300 font-semibold' href="/user">Back</Link>
                </form>
            </div>
        </div>
    )
}




export default page