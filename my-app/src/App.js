
import Todo from "./app/Todo";
import Color from "./app/Color";
import Buy from "./app/Buy";
import Post from "./app/Post";
import Quiz from "./app/Quiz";
function App(){
  return(
    <>
      <Todo />
      <Color />
      <Buy />
      <h2>Bài 4: Like/Dislike Post</h2>
      <Post text="Học ReactJS có khó không?" />
      <Post text="Props và State là gì?" />
      <Post text="Lập trình web có vui không?" />
      <Quiz />
    </>
  )
}
export default App;