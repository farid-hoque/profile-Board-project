
import axios from "axios";




export async function createUserComponent(data: any) {
  /**
   * hit api
   * eror handling
   * return data
   * data showing to sql database
   * API Call এর জন্য আলাদা ফাংশন
   * 
   */
  const response = await axios.post("http://localhost:4040/developer", { ...data })
  if (!response.data) throw new Error("post data not foundh here")
  return response.data;
}




/**
 * Finally Data showing to browser UI
 */

export async function getBrowserUser() {
  const response = await axios.get('http://localhost:4040/developer')
  /**
   * Hit Api
   * Error Handling
   * Return Data
   * API Call এর জন্য আলাদা ফাংশন
   */
  if (!response.data) throw new Error("Data Not Showing to Browser UI");
  return response.data;
}



/**
 * Data Delete from  Browser ui 
 * API Call এর জন্য আলাদা ফাংশন
 */
export async function userDelete(id: number) {
  /*
  1.Hit Api
  2.Eror Handling
  3.Return Data
  API Call এর জন্য আলাদা ফাংশন
   */
  const respponse = await axios.delete(`http://localhost:4040/developer/${id}`)
  if (!respponse.data) throw new Error("Delete Way not Working");
  return respponse.data;
}


/**
 * Read Operator For Data showing ot Browser UI
 * @param id use For Update(merhod) or || eidt method
 * @returns 
 * API Call এর জন্য আলাদা ফাংশন
 * ডাটাবেস থেকে একজন ইউজারের পুরনো ডাটা আনার ফাংশন (এডিট ফর্মে দেখানোর জন্য)
 */
export async function getSingleUser(id: string) {
  const response = await axios.get(`http://localhost:4040/developer/${id}`)
  if (!response.data) throw new Error("Bad Request");
  return response.data
}
/**
 * 
 * @param id use For Update(merhod) or || eidt method
 * @param data use For Update(merhod) or || eidt method
 * @returns 
 * API Call এর জন্য আলাদা ফাংশন
 * ডাটা আপডেট করার মেইন ফাংশন
 */
export async function updateUserComponent(id: string, data: any) {
  const response = await axios.patch(`http://localhost:4040/developer/${id}`, data)
  if (!response.data) throw new Error('Bad Request for Update data');
  return response.data;
}