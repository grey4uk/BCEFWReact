import "./App.css";
// import { Post } from "./components/Post/Post";
import Title from "./components/Title/Title";
import Container from "./components/Container/Container";
import PostList from "./components/PostList/PostList";
import array from "./db/db.json";
import AlertDialog from "./components/Modal/Modal";

function App() {
  // const imgPath =
  //   "https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg";
  console.log("re-render");
  return (
    <>
      <Container>
        <AlertDialog />
        <Title
          text='Hello, dear friend)'
          boldStyle={true}
        />
        {/* <Post url={imgPath} />
        <Post url='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg' /> */}
        <PostList posts={array} />
        <Title />
      </Container>
    </>
  );
}

export default App;
