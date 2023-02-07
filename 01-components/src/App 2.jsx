import "./App.css";
import { Post } from "./components/Post/Post";
import Title from "./components/Title/Title";
import Container from "./components/Container/Container";

function App() {
  const imgPath =
    "https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg";
  return (
    <>
      <Container>
        <Title text='Hello, dear friend)' />
        <Post url={imgPath} />
        <Post url='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg' />
        <Title />
      </Container>
    </>
  );
}

export default App;
