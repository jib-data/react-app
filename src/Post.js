import { useState } from "react";
import Comment from "./Comment";
const Post = () => {
  const post = {
    id: 1,
    text: "This is hilarious",
  };
  const comments = [
    { commentId: 1, text: "Hahah, I agree" },
    { commentId: 2, text: "Hahah, I Me too" },
    { commentId: 3, text: "Hahah, I fuck off" },
    { commentId: 4, text: "Okay, okay" },
  ];

  return (
    <>
      <h3>{post.text}</h3>
      <Comment comments={comments} />
    </>
  );
};
export default Post;
