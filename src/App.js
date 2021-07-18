import React from "react";

const Food = ({ name, picture }) => {
  return (
    <div>
      <h2>I love {name}</h2>;
      <img src={picture} />;
    </div>
  );
};

const foodILike = [
  {
    name: "Kimchi",
    image: "https://pbs.twimg.com/media/CUvEAsTUcAANUnd.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "http://static.news.zumst.com/images/2/2017/02/26/2030c76e427f4c278c16ab0eb81bd45d.jpg",
  },
  {
    name: "Bibimbap",
    image:
      "https://ext.fmkorea.com/files/attach/new/20160118/3655304/26867920/295252026/079374140f849a679002fdfc804ad300.jpg",
  },
  {
    name: "Doncasu",
    image:
      "http://mbcmall.imbc.com/store/__icsFiles/afieldfile/2018/12/27/001_1.jpg",
  },
  {
    name: "Kimbap",
    image:
      "http://recipe.ezmember.co.kr/cache/recipe/2015/04/04/74948292d9f3b94cf248bab1c2ce71f21.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
