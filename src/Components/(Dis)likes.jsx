import { useState } from "react";

export function Likes() {
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

export function Dislikes() {
  const [dislikes, setDislikes] = useState(0);
  const dislike = () => setDislikes(dislikes + 1);
  return (
    <div>
      <button onClick={dislike}>
        {dislikes} Dislikes 👎
      </button>
    </div>
  );
}