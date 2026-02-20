
import { deleteUserAction } from '@/libs/actions/userActions';
import { getBrowserUser } from '@/libs/sc/userServerComponent'
import Link from 'next/link'
import React from 'react'

async function page() {
    const browserUser = await getBrowserUser();
    console.log(browserUser)
    return (





        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <title>User Management - Create & View</title>

            <h3 className='text-center font-black text-2xl'>user table</h3>
            <hr className="my-12 border-gray-200 max-w-5xl mx-auto" />

            {/* ২. টেবিল সেকশন */}
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    {/* <h1 className="text-2xl font-bold text-gray-800">Existing Users</h1> */}
                    <Link className="text-2xl   border px-3 border-amber-700 bg-sky-400" href="/user/ucreate">User/Table</Link>
                    <span className="text-sm text-gray-500">Showing Results</span>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        {/* Table start */}
                        <table className="min-w-full divide-y divide-gray-200">
                            {/* Table-Header part  */}
                            <thead className="bg-gray-50">
                                <tr>
                                    {/* Header part insdie t-head  */}
                                    {['ID', 'Name', 'Email', 'location', 'photo', 'Delete'].map((header) => (
                                        <th key={header} className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            {/* Table-Body Part  Maping Also*/}
                            <tbody className="bg-white divide-y divide-gray-200">

                                {browserUser.map((items) => {
                                    return <tr key={items.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-gray-900">{items.id}</td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-900">{items.name}</td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">{items.email}</td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">{items.location}</td>
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                <img className='w-[80px] h-[80px] object-cover rounded-sm ' src={items.photo} alt="" />
                                            </span>
                                        </td>

                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <form action={deleteUserAction}>
                                                <input type="hidden" value={items.id} name='id' />
                                                <button type='submit' className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 cursor-pointer">
                                                    Delete
                                                </button>
                                            </form>

                                        </td>

                                    </tr>
                                })}

                                {/* আরও ডেটা এখানে যোগ করতে পারেন */}
                                {/* <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                    <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                                    <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
                                    <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">location</td>
                                    <td className="px-6 py-5 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                            photo
                                        </span>
                                    </td>
                                </tr> */}

                            </tbody>
                        </table>
                        {/* table end  */}
                    </div>
                </div>
            </div>
        </div>






    )
}

export default page