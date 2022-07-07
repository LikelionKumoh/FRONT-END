let frontEndInfo = [
    {
      id:1,
      name:"이태헌",
      age:23,
      department :"컴퓨터공학과",
      MBTI:"INFJ",
      detail:"저는 소통을 잘하는 프론트엔드 개발자가 되고싶은 이태헌입니다!",
      photo:"imgM",
    },
    {
      id:2,
      name:"백승민",
      age:25,
      department :"컴퓨터공학과",
      MBTI:"ESFP",
      detail:"저만의 색을 가진 프론트엔드 개발자가 되고싶습니다 🙂",
      photo:"imgM",
    },
    {
      id:3,
      name:"오세찬",
      age:25,
      department :"컴퓨터공학과",
      MBTI:"ENTP",
      detail:"좋은 서비스를 만들기 위해 노력하는 프론트엔드 개발자가 되고 싶습니다~",
      photo:"imgM",
    },
    {
      id:4,
      name:"임수연",
      age:22,
      department :"컴퓨터소프트웨어공학과",
      MBTI:"INFJ",
      detail:"한 눈에 알아보기 쉬운 페이지들을 제작하는 프론트엔드 개발자가 되고싶습니다.",
      photo:"imgF"
    },
    {
      id:5,
      name:"김민경",
      age:22,
      department :"메디컬IT융합",
      MBTI:"ESFP",
      detail:"저는 헬스케어 분야와 관련된 프론트앤드개발자가 되고싶습니다. 이를 통해 좀 더 고객과 의료산업분야 기기 사이에 거리감을 줄여 더욱 편리한 헬스케어를 만들어 보고싶습니다. ",
      photo:"imgF",
    },
    {
      id:6,
      name:"박규현",
      age:24,
      department :"전자IT융합",
      MBTI:"ENTP",
      detail:"기획하는 프론트엔드 개발자가 되고 싶습니다 !",
      photo:"imgM",
    },
  ];

  export function getPeople(){
    return frontEndInfo;
}

export function getPerson(id){
  let depart = "";
  if(id===1){
    depart = "컴퓨터공학과";
  }else if(id===2){
    depart = "컴퓨터소프트웨어공학과";
  }else if(id===3){
    depart = "메디컬IT융합";
  }else{
    depart = "전자IT융합";
  }

  const getPersonList = frontEndInfo.filter((member)=>{
    return (member.department===depart);
  });

  return getPersonList;
}
//return frontEndInfo.find((person)=>person.id===id);