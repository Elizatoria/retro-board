import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
 
  const [name, setName] = useState("");

  const [cost, setCost] = useState("");

  return (
         //<!-- Layout changer -->
         <div class="content row">
           <button type="submit" className="btn btn-success">Column</button>
         </div>
 
         //<!-- The class "row" is for the layout changer -->
         <div class="RetroApp row">
           <!-- Retro category -->
           <div class="RetroCategory RetroCategory-1">
             <h2>Went Well</h2>
             //<!-- Add a new card button -->
             <button
               type="button"
               class="ButtonAdd button button-default"
               aria-label="Add new card"
               title="Add new card"
             >
               +
             </button>
 
             <!-- A retro card (retrospective item) -->
             <div class="RetroCard" aria-label="Retro card">
               <!-- User input -->
               <textarea
                 class="textbox"
                 placeholder="Enter text here"
                 aria-label="Enter text here"
                 rows="1"
                 value="Here is an example card"
               >
               </textarea>
 
               <div class="button-group">
                 <button
                   type="button"
                   class="button button-left"
                   title="Move left"
                 >
                   <img
                     src="angleLeft.svg"
                     alt="Move left"
                     width="12"
                     height="12"
                   />
                 </button>
                 <button
                   type="button"
                   class="button button-delete"
                   title="Delete"
                 >
                   <img
                     src="timesCircle.svg"
                     alt="Delete"
                     width="12"
                     height="12"
                   />
                 </button>
                 <div>
                   <button type="button" class="button button-left" title="Like">
                     <img src="thumbsUp.svg" alt="Like" width="12" height="12" />
                     5
                   </button>
                   <button
                     type="button"
                     class="button button-left"
                     title="Dislike"
                   >
                     <img
                       src="thumbsDown.svg"
                       alt="Dislike"
                       width="12"
                       height="12"
                     />
                     0
                   </button>
                   <button
                     type="button"
                     class="button button-right"
                     title="Move right"
                   >
                     <img
                       src="angleRight.svg"
                       alt="Move right"
                       width="12"
                       height="12"
                     />
                   </button>
                 </div>
               </div>
             </div>
           </div>
 
           <!-- Retro category -->
           <div class="RetroCategory RetroCategory-2">
             <h2>To Improve</h2>
             <button
               type="button"
               class="ButtonAdd button button-default"
               aria-label="Add to new card"
               title="Add to new card"
             >
               +
             </button>
           </div>
 
           <!-- Retro category -->
           <div class="RetroCategory RetroCategory-3">
             <h2>Action Items</h2>
             <button
               type="button"
               class="ButtonAdd button button-default"
               aria-label="Add to new card"
               title="Add to new card"
             >
               +
             </button>
           </div>
         </div>
  );
}

export default App;
