export function Likes({likes, setLikes}) {
  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>
        {likes} Likes 👍
      </button>
    </div>
  );
}

export function Dislikes({dislikes, setDislikes}) {
  return (
    <div>
      <button onClick={() => setDislikes(dislikes + 1)}>
        {dislikes} Dislikes 👎
      </button>
    </div>
  );
}