import React from "react";
import PropTypes from "prop-types";

const Food = ({ name, picture, rating }) => {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://pbs.twimg.com/media/CUvEAsTUcAANUnd.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "http://static.news.zumst.com/images/2/2017/02/26/2030c76e427f4c278c16ab0eb81bd45d.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://ext.fmkorea.com/files/attach/new/20160118/3655304/26867920/295252026/079374140f849a679002fdfc804ad300.jpg",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "http://mbcmall.imbc.com/store/__icsFiles/afieldfile/2018/12/27/001_1.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://recipe.ezmember.co.kr/cache/recipe/2015/04/04/74948292d9f3b94cf248bab1c2ce71f21.jpg",
    rating: 4.4,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
