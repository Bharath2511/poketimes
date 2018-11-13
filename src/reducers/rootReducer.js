const initState = {
  posts: [
    { id: "1", title: "helix", body: "lorem ipsum" },
    { id: "2", title: "charmendar", body: "lorem ipsum" },
    { id: "3", title: "drogo", body: "lorem ipsum" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
