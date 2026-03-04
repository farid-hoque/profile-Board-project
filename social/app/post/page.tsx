

import { postActionDelete } from '@/libs/actions/postAction';
import { getPostViewComponet } from '@/libs/sc/postServerComponent';
import Link from 'next/link';
import React from 'react';

async function PostPage() {
  // এখানে আপনার নিজের লজিক দিয়ে ডাটা নিয়ে আসবেন from sc file 
  const viewPost = await getPostViewComponet()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h3 className='text-center font-black text-2xl'>Post Table</h3>
      <hr className="my-12 border-gray-200 max-w-5xl mx-auto" />

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link className="text-2xl border px-3 border-amber-700 bg-sky-400" href="/user">
            User/Table
          </Link>
          <span className="text-sm text-gray-500">Showing All Posts</span>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['ID', 'Title', 'Coment', 'Author', 'Photo', 'Delete', 'Edit'].map((header) => (
                    <th key={header} className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">

                {viewPost.map((post) => {
                  {/* এখানে আপনি আপনার ডাটা ম্যাপ (map) করবেন */ }

                  return <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-gray-900">{post.id}</td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-900">{post.title}</td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">{post.coment}</td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">{post.author?.name}</td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex flex-col items-center">
                        {post.image ? (
                          <img
                            src={post.image}
                            className='w-[80px] h-[80px] object-cover rounded-md border border-gray-200'
                            alt={post.title}
                          />
                        ) : (
                          <div className="w-[80px] h-[80px] bg-gray-200 flex items-center justify-center text-xs text-gray-400">
                            No Photo
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-5 whitespace-nowrap">
                      {/* ডিলিট ফর্ম বা বাটন এখানে বসবে */}
                      <form action={postActionDelete}>
                        <input type="hidden" value={post.id} name='id' />
                        <button type='submit' className="bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer">Delete</button>
                      </form>

                    </td>

                    <td className="px-6 py-5 whitespace-nowrap">
                      {/* এডিট লিংক এখানে বসবে */}
                      <Link href={`/post/pedit/${post.id}`} className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium">Edit</Link>
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
// সহজ কথায়: এটি একটি গোপন খামের মতো, যার ওপর নাম(name) লেখা থাকে এবং ভেতরে আসল তথ্য(value) থাকে, যা ইউজার দেখতে পায় না(hidden) কিন্তু কাজ ঠিকই হয়। why use input and input value,ohters