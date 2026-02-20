
import axios from "axios";



export async function createUserComponent(data: any) {
  /**
   * hit api
   * eror handling
   * return data
   * data showing to sql database
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
   */
  if (!response.data) throw new Error("Data Not Showing to Browser UI");
  return response.data;
}

/**
 * Data Delete from  Browser ui 
 */
export async function userDelete(id: number) {
  /*
  1.Hit Api
  2.Eror Handling
  3.Return Data
   */
  const respponse = await axios.delete(`http://localhost:4040/developer/${id}`)
  if (!respponse.data) throw new Error("Delete Way not Working");
  return respponse.data;
}