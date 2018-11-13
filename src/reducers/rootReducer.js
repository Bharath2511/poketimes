const initState = {
  posts: [
    { id: "1", title: "helix", body: "lorem ipsum" },
    { id: "2", title: "charmendar", body: "lorem ipsum" },
    { id: "3", title: "drogo", body: "lorem ipsum" }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
