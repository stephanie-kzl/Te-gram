import axios from 'axios';



export default {
    getUserPics(username) {
        return axios.get(`/viewPosts/user/${username}`)
    },
    addNewPic(userPost){
        return axios.post('/addPost', userPost)
    },
    addNewComment(userComment){
        return axios.post('/addComment', userComment)
    },
    list(username) {
        return axios.get(`/viewPosts/${username}`);
    }

}