import './App.css'
import Header from './header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Trip from './main/Trip'
import Training from './main/Training'
import Shop from './main/Shop'
import MyPage from './main/MyPage'
import BoardList from './main/BoardList'
import SignUp from './main/SingUp'
import Login from './main/Login'
// import { useEffect } from 'react'
// import { db } from './firebase'
// import { collection, addDoc } from "firebase/firestore";
import { useAuth } from './main/useAuth.ts';
import UploadPost from './main/UploadPost.tsx'

function App() {
  // const isLoggedIn = false;

  const user = useAuth();

  // async function addData() {
  //   await addDoc(collection(db, "게시판"), {
  //     content: 'content',
  //     timeStamp: 'dateAndTime',
  //     feedId: 'feedId',
  //     imagelink: 'imagePath',
  //     writerId: 'uid',
  //     writerNickname: 'displayName',
  //   }).then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  //     console.log("내용은 :", );
  //     console.log("시간은 :", );
  //     console.log("ID는 :", );
  //     console.log("사진 URL은 :", );
  //     console.log("작성자 ID는 :", );
  //     console.log("작성자 닉네임은 :", );//생각해보니 작성자 페이지 url을 넘겨줘도 되겠다.
  //     alert("글 작성 완료! Board 탭에서 게시글 확인해주세요!");
  //   })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     })
  // }
  // addData();

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <header><Header /></header>
        <main>
          <Routes>
          <Route path="/" element={<BoardList />} />
            <Route path="/boardList" element={<BoardList />} />
            <Route path="/training" element={<Training />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/trip" element={<UploadPost />} />
            {/* <Route path="/myPage" element={isLoggedIn ? <Login /> : <Login />} /> */}
            <Route path="/myPage" element={user ? <MyPage /> : <Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/uploadPost' element={<UploadPost />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  )
}


export default App
