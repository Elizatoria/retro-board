import { useState } from "react";

function Likes() {
  const [likes, setLikes] = useState(0);
  const like = () => setLikes(likes + 1);
  return (
    <div>
      <button onClick={like}>
        {likes} Likes 👍
      </button>
    </div>
  );
}

export default Likes;