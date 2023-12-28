import { useState } from "react";

import "../styles/diary.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../styles/nppTable.scss"

function Loyaut() {
  const [inputValue, setInputValue] = useState(0);


    return(
    <>
      <div className="wrapper">
        <header className="header"></header>
        <main className="main">
          <div className="main-header">
            <div className="main-header-body">
              <div className="main-header-left">
                <div className="main-user">
                    <Link to="student">
                        Студент
                    </Link>
                  <span>/</span>
                  <Link to="administrator">Администратор</Link>
                  <span>/</span>
                  <Link to="npp">НПП</Link>
                  <span>/</span>
                  <Link to="supervisor">Керівник ЯК</Link>
                </div>
              </div>
              <div className="main-header-right">
                <div className="main-right-img-1"></div>
                <div className="main-right-img-2"></div>
                <div className="main-right-user">
                  <div className="user-ico">
                    <span>Л</span>
                  </div>
                  <div className="user-name">
                    <span>Маргарита Філатова</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="diary">
              
              {
                
              }
<Outlet/>
              {/* <CreateFromStudent /> */}

              {/* <StudentTable/> */}
              {/* <AdministratorTable/> */}
              {/* <NppTable/> */}
              {/* <SupervisorTable/> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Loyaut



// function App() {
//   const diaryData = JSON.stringify();
//   const [count, setCount] = useState(0);
//   const [inputValue, setInputValue] = useState(0);
//   const [user, setUser] = useState(0);

//   async function diaryStudent() {
//     const response = await fetch("https://658b4f21ba789a962238a6e6.mockapi.io/diaryStudent");
//     const movies = await response.json();
//     console.log(movies);
//   }

//   diaryStudent()
  
//   // let diaryNamesStr = {
//   //   "Студент": ["Назва","К-ть тижнів","Термін проходження","Оцінка","Курс","Керівник","Редагування","Стан"],
//   //   "Адміністратор": [],
//   //   "НПП": [],
//   //   "Керівник ЯК": [],
//   // }
//   let num = 0;
//   // let diaryNames = {
//   //   zero: <StudentTable/>,
//   //   one: <AdministratorTable/>,
//   //   two: <NppTable/>,
//   //   three: <SupervisorTable/>,
//   // }


//   return (
//     <>
//     <BrowserRoute>
//       <Routes>
//         <Route path="/" element={<Diary/>}/>
//       </Routes>
//     </BrowserRoute>
//     </>
//   )


//   // return (
//   //   <>
//   //     <div className="wrapper">
//   //       <header className="header"></header>
//   //       <main className="main">
//   //         <div className="main-header">
//   //           <div className="main-header-body">
//   //             <div className="main-header-left">
//   //               <div className="main-user">
//   //                 <span>Студент</span>
//   //                 <span>/</span>
//   //                 <span>Администратор</span>
//   //                 <span>/</span>
//   //                 <span>НПП</span>
//   //                 <span>/</span>
//   //                 <span>Керівник ЯК</span>
//   //               </div>
//   //             </div>
//   //             <div className="main-header-right">
//   //               <div className="main-right-img-1"></div>
//   //               <div className="main-right-img-2"></div>
//   //               <div className="main-right-user">
//   //                 <div className="user-ico">
//   //                   <span>Л</span>
//   //                 </div>
//   //                 <div className="user-name">
//   //                   <span>Маргарита Філатова</span>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>

//   //         <div className="text-fetch-block">
//   //           <input
//   //             min={0}
//   //             max={3}
//   //             type="number"
//   //             value={inputValue}
//   //             onChange={(e) => {
//   //               setInputValue(e.target.value);
//   //             }}
//   //           />
//   //           <button
//   //             onClick={() => {
//   //               setUser(inputValue);
//   //             }}
//   //           >
//   //             Запрос на сервак
//   //           </button>
//   //         </div>

//   //         <div className="container">
//   //           <div className="diary">
//   //             <div className="diary-title">
//   //               <h1>Щоденник практики</h1>
//   //               <div className="diary-create-button create">
//   //                 <a type="button" href="?ss">
//   //                  Створити щоденник
//   //                 </a>
//   //               </div>
//   //             </div>
//   //             {
                
//   //             }
//   //             {user == 0 ? (<StudentTable/>):( user == 1 ? (<AdministratorTable/>) : (user == 2 ? (<NppTable/>):(<SupervisorTable/>)))}

//   //             {/* <CreateFromStudent /> */}

//   //             {/* <StudentTable/> */}
//   //             {/* <AdministratorTable/> */}
//   //             {/* <NppTable/> */}
//   //             {/* <SupervisorTable/> */}
//   //           </div>
//   //         </div>
//   //       </main>
//   //     </div>
//   //   </>
//   // );
// }

// export default App;

