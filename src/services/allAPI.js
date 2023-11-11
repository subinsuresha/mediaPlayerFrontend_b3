import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//upload video
export const uploadVideo = async(reqBody)=>{
    //return the response to Add.jsx component
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}


//get all uploaded videos
export const getAllVideos = async()=>{
    //return the response to View.jsx component
   return await commonAPI('GET',`${serverURL}/videos`,"")
}


//to delete a video
export const deleteAVideo = async(id)=>{
return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}


//api to add history
export const addToHistory = async(videoDetails)=>{
return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}


//api to get history from json-server
export const getAllHistory = async()=>{
return await commonAPI('GET',`${serverURL}/history`,"")
}


//api call to delete history
export const deleteVideoHistory = async(id)=>{
return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


//api to add category to json-server
export const addAllCategory = async(body)=>{
return await commonAPI('POST',`${serverURL}/categories`,body)
}


//api to get all categories from json-server
export const getAllcategories = async()=>{
return await commonAPI('GET',`${serverURL}/categories`,"")
}


//api to delete categories from json-server
export const deletecategory = async(id)=>{
return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}
  

//api to get a particular video from http://localhost:5000/videos
export const getAVideo = async(id)=>{
return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}


//api to update the category with new videos
export const updateCategory = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}