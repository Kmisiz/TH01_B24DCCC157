import { useState } from "react";

function Post({ text }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0" }}>
      <p>{text}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button
        onClick={() => setDislikes(dislikes + 1)}
        style={{ marginLeft: "10px" }}
      >
        👎 {dislikes}
      </button>
    </div>
  );
}

export default Post;
