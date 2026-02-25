




import EditUserForm from '@/components/EditUserForm/EditUserForm';
import { updateUserAction } from '@/libs/actions/userActions';
import { getSingleUser } from '@/libs/sc/userServerComponent'
import Link from 'next/link'
import React from 'react'
// import { userActionCreate } from '@/libs/actions/userActions'
async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const singleUser = await getSingleUser(id);
  return (
    <div className="w-full max-w-md mx-auto mt-10 pt-10">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 ">
          Update your account
        </h2>

        {/* ekhane amra client component k call korbo and client component er vitor e edit form asa*/}
        <EditUserForm user={singleUser} id={id}  />

       
        
      </div>
    </div>
  )
}




export default page