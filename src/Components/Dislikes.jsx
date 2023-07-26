import { useState } from "react";

function Dislikes() {
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

export default Dislikes;