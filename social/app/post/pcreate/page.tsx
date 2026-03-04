import { postActionCreate } from "@/libs/actions/postAction";
import Link from "next/link";

export default async function PCreatePage({ searchParams }: { searchParams: Promise<{ authorId: string }> }) {
  // ১. এখানে ইউজার আইডিটা রিসিভ করার লজিক লিখবেন
  // const authorId= searchParams.authorId
  const { authorId } = await searchParams;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create New Post</h1>

        {/* ২. এখানে ফর্মের action এবং ডাটা পাঠানোর লজিক বসবে */}
        <form action={postActionCreate} className="space-y-4">

          {/* ৩. হিডেন ইনপুটে ইউজার আইডি বা অথর আইডি সেট করবেন */}
          <input type="hidden" name="authorId" value={authorId} />

          <div>
            <label className="block text-sm font-medium text-gray-700">Post Title</label>
            <input
              name="title"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Coment</label>
            <textarea
              name="coment"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your post content..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Post Image</label>
            <input
              name="image"
              type="file"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Publish Post
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link href="/user" className="text-sm text-orange-400 hover:underline">
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}

// pcreate পেজের ক্ষেত্রে(searchParams): এই পেজে আপনি যখন ইউজার টেবিল থেকে আসছেন, তখন আপনি আইডিটি ইউআরএল - এর শেষে প্রশ্নবোধক চিহ্ন দিয়ে পাঠাচ্ছেন(যেমন: /post/pcreate ? authorId = 5)। ইউআরএল - এ প্রশ্নবোধক চিহ্নের পরের অংশকে বলা হয় Query String, আর নেক্সট জেএস - এ এটি ধরার একমাত্র উপায় হলো searchParams।