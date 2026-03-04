

import axios from "axios";
/**
 * ডাটা ডাটাবেজে পাঠানো (POST)।
 * যখন ইউজার কোনো ফর্ম ফিলাপ করে "Submit" বাটনে ক্লিক করবে
 * @param data 
 * @returns 
 */
export async function createPostComponent(data: any) {
  const response = await axios.post('http://localhost:4040/post', data)
  if (!response.data) throw new Error("post not response");
  return response.data;
}

/**
 * ডাটাবেজ থেকে ডাটা নিয়ে আসা (GET)।
 * যখন আপনি ব্রাউজারে বা স্ক্রিনে সব পোস্টের লিস্ট দেখাতে চান।
 * @returns 
 */
export async function getPostViewComponet() {
  const response = await axios.get('http://localhost:4040/post');
  if (!response.data) throw new Error('post data not showing for error');
  return response.data;
}
/**
 * ডাটা মুছে ফেলা (DELETE)।
 * যখন আপনি কোনো নির্দিষ্ট পোস্ট ডিলিট করতে চান।
 * @param id 
 * @returns 
 */
export async function postDeleteView(id: any) {
  const response = await axios.delete(`http://localhost:4040/post/${id}`)
  if (!response.data) throw new Error('Post data not delete successfully');
   
   
  return response.data;
}