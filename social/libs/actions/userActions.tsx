
"use server"

import CloudinaryImageUpload from "haq-cloudinary";
import { createUserComponent, userDelete } from "../sc/userServerComponent";
import { revalidatePath } from "next/cache";

export async function userActionCreate(formData: FormData) {
  console.log(formData);
  /**
   * formdata.get that means get form data here
   */
  const file = formData.get("photo") as File
  /**
   * file means photo upload to cloudinary or upload phoot
   */
  const fileData = await CloudinaryImageUpload({
    file: file,
    preset: "profile_board",
    cloudName: "dck3xubrt"
  })

  /**
   * finaly send all data to DB use server component
   */
  await createUserComponent({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    location: formData.get('location'),
    photo: fileData.secure_url,
  })
  revalidatePath('/user')
}
export async function deleteUserAction(formData: FormData) {
  /* formdata theke id find kore ante hobe */
  const idString = formData.get('id');
  const idNumber = Number(idString)
  await userDelete(idNumber)
  revalidatePath('/user')
}