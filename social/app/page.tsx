import Link from "next/link";

 

export default function Home() {
  return (
    <>
      <div className="w-[500px] mx-auto mt-[300px] flex gap-1">
        <Link href="/user" className="p-4 bg-rose-300 hover:bg-rose-600 cursor-pointer w-[80px] rounded">user</Link>
        <button className="p-4 bg-rose-300 hover:bg-rose-600 cursor-pointer w-[80px] rounded">post</button>
        <button className="p-4 bg-rose-300 hover:bg-rose-600 cursor-pointer w-[80px] rounded">Timeline</button>
      </div>
    </>
  );
}
