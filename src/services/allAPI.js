import { commonAPI } from './commonAPI';
import { BASE_URL } from './baseURL'
import Category from '../components/Category';

// uploading video
export const uploadVideo = async (video) => {
    // http post request to http://localhost:4000/videos for adding videos in json server
    //  and return response to add component
    return await commonAPI("POST", `${BASE_URL}/videos`, video)
}

// get all videos from json server
export const getAllvideos = async () => {
    // http get request to http://localhost:4000/videos for getting videos from json server
    //  and return response to View component
    return await commonAPI("GET", `${BASE_URL}/videos`, "")
}

// get a single video
export const getAvideos = async (id) => {
    // http get request to http://localhost:4000/videos/id for getting videos from json server
    //  and return response to Videocard component
    return await commonAPI("GET", `${BASE_URL}/videos/${id}`, "")
}

export const deleteAvideos = async (id) => {
    // http delete request to http://localhost:4000/videos/id for getting videos from json server
    //  and return response to Videocard component
    return await commonAPI("DELETE", `${BASE_URL}/videos/${id}`, {})
}

export const addToHistory = async (videoHistory) => {
    // http post request to  http://localhost:4000/history for adding videohistory from json server and return
    // response to watchHistory
    return await commonAPI("POST", `${BASE_URL}/history`, videoHistory)
}

export const getHistory = async () => {
    // http get request to  http://localhost:4000/history for get videohistory from json server and return
    // response to watchHistory
    return await commonAPI("GET", `${BASE_URL}/history`)
}
export const deleteAhistory = async (id) => {
    // http delete request to  http://localhost:4000/history for delete a videohistory from json server and return
    // response to watchHistory}
    return await commonAPI("DELETE", `${BASE_URL}/history/${id}`)
}

// adding category
export const addCategory = async (body) => {
    // http post request to http://localhost:4000/categories for adding category from json server
    //  and return response to category component
    return await commonAPI("POST", `${BASE_URL}/categories`, body)

}

// get all category
export const getAllCategory = async () => {
    // http get request to http://localhost:4000/categories for adding category from json server
    //  and return response to category component
    return await commonAPI("GET", `${BASE_URL}/categories`, "")

}

// delete category
export const deletecategory = async (id) => {
    // http delete request to http://localhost:4000/categories/id for getting videos from json server
    //  and return response to category component
    return await commonAPI("DELETE", `${BASE_URL}/categories/${id}`, {})
}

// update category from json server
export const updatecategory = async (id, updatedCategoryBody) => {
    // http put request to http://localhost:4000/categories/id for updating existing videos from json server
    //  and return response to category component
    return await commonAPI("PUT", `${BASE_URL}/categories/${id}`, updatedCategoryBody)
}