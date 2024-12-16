const Comment = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.commentId}>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
};
export default Comment;
