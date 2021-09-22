import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE} from '../constants/actionTypes';
const postsReducer = (posts=[], action) => {
    switch (action.type) {
        case UPDATE:
        case LIKE :
            return posts.map((post) => post._id === action.payload._id ? action.payload: post);
        case FETCH_ALL:
            console.log("Fetch reducers called");
            return action.payload ;
        case CREATE:
            return [...posts, action.payload] ;
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
       //case AUTH:
         //   console.log("Auth is called here");
        default:
            return posts;

    }
};

export default postsReducer ;