
"use server"
import CloudinaryImageUpload from "haq-cloudinary";
import { createPostComponent, postDeleteView } from "../sc/postServerComponent";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 * image uplaod to cloudinary
 * then data save to data base or data sending to database or data pahtano to database
 * @param formData 
 */
export async function postActionCreate(formData: FormData) {
  const fileData = await CloudinaryImageUpload({
    file: formData.get('image') as File,
    preset: "profile_board",
    cloudName: "dck3xubrt"
  })
  //data send to mysql-f
  await createPostComponent({
    title: formData.get('title'),
    coment: formData.get('coment'),
    image: fileData.secure_url,
    authorId: Number(formData.get('authorId')) // ID অবশ্যই Number হতে হবে
  })
  revalidatePath('/post')
  redirect('/post')
}


/**
 * 
 * @param formData 
 */
export async function postActionDelete(formData: FormData) {
  const idString = formData.get('id');
console.log('deleteid', idString)
  const idNumber =  Number(idString)
  await postDeleteView(idNumber);
  revalidatePath('/post')
}