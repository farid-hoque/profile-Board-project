
"use server"

import CloudinaryImageUpload from "haq-cloudinary";
import { createUserComponent, updateUserComponent, userDelete } from "../sc/userServerComponent";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import {v2 as cloudinary} from "haq-cloudinary"

/**
 * ===============================================
 * @param formData 
 */
export async function userActionCreate(formData: FormData) {
  console.log(formData);

  const file = formData.get("photo") as File

  // file means photo upload to cloudinary or upload phoot
  const fileData = await CloudinaryImageUpload({
    file: file,
    preset: "profile_board",
    cloudName: "dck3xubrt"
  })
  //finaly send all data to DB use server component
  await createUserComponent({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    location: formData.get('location'),
    photo: fileData.secure_url,
  })
  revalidatePath('/user')
}




/**
 * Delete Function make here===============================================
 * @param formData 
 */
export async function deleteUserAction(formData: FormData) {
  /* formdata theke id find kore ante hobe */
  const idString = formData.get('id');
  const idNumber = Number(idString)
  /*UserDelete func come from usercomponent file */
  await userDelete(idNumber)
  revalidatePath('/user')
}




/*For Data Update also photo update to cloudinary================================*/
/**
 * 
 * @param formData 
 */
export async function updateUserAction(formData: FormData) {
  // const id = formData.get('id') as string 
  const id = formData.get('id')?.toString() || ""
  // console.log('id chekc', id)
  //photo update with cloudinary//
  const file = formData.get('photo') as File // ফাইলটি ধরলাম
  let photoPath = "";

  // // --- পুরনো ছবি ডিলিট করার লজিক
  // const oldFile = await getSingleUser(id)
  // if (oldFile.photo) {
  //   await cloudinary.v2.uploader.destroy(public_id)
  // }


  // যদি ইউজার নতুন কোনো ছবি সিলেক্ট করে থাকে means conditon used
  if (file && file.size > 0) {
    const fileData = await CloudinaryImageUpload({
      file: file,
      preset: "profile_board",
      cloudName: "dck3xubrt"
    });
    photoPath = fileData.secure_url;
  }


  const updateUser = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    location: formData.get('location'),
    ...(photoPath && { photo: photoPath }) // শুধু ছবি থাকলে আপডেট হবে
  }
  //এখানে আপনি আলাদা করা ফাংশনটি কল করছেন
  //ব্যাকএন্ড ফাংশনটিকে কল করা (সবচেয়ে গুরুত্বপূর্ণ ধাপ)
  await updateUserComponent(id, updateUser)
  revalidatePath('/user')
  redirect('/user')
}