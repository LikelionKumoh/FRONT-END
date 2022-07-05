import logo from './logo.svg';
import './App.css';
//내가 한 것 실패
// function App() {
//   const webs = ['naver', 'google', 'instagram', 'facebook'];
  
//   const webList = webs.map((web) => {
//     let webLink = `https://www.${webs}.com`;
//     return<li><a href={webLink}>{web}</a></li>});

//   return (
//     <>
//       <h2>사이트 목록</h2>
//       <>
//         {webList}
//       </>
//     </>
    
//   );
// }

// function App() {
//   const site_arr = ['naver', 'google', 'instagram', 'facebook'];

//   return (
//     <>
//     <h2>사이트 목록</h2>
//     {
//       site_arr.map((ele)=>{
//         let link =`https://www.${ele}.com`;
//         return <li><a href={link}>{ele}</a></li>})}
//     </>
//   )
// }

function App(){
  function getId(e)
  {
    search_hak = e.target.id;
    hak_list = info.filter((ele)=>{return ele.{e.}})
  }

  let search_hak="";
  let hak_list = [];

  const info = [
    {
      name:"이태헌",
      hak :"컴퓨터공학과",
    },
    {
      name:"백승민",
      hak :"컴퓨터공학과",
    },
    {
      name:"오세찬",
      hak :"컴퓨터공학과",
    },
    {
      name:"임수현",
      hak :"컴퓨터공학과",
    },
    {
      name:"박규현",
      hak :"전자IT융합",
    },
  ]
  return(

  )
}
export default App;

info