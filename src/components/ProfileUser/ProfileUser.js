import React from 'react'
import './ProfileUser.scss'

export const ProfileUser = props => {
  function getRandomColor() {
    const ranges = [
        [150,256],
        [50, 190],
        [50, 190]
    ];
    const g = () => {
      const range = ranges.splice(
        Math.floor(Math.random() * ranges.length),
        1
      )[0];
      return (
        Math.floor(Math.random() * (range[1] - range[0])) +
        range[0]
      );
    }
    return "rgb(" + g() + "," + g() + "," + g() +")";
};
  const anonImg = './images/anonImg.jpg'
  const {
    name,
    img,
    posts,
  } = props.user.user;
  return (
    <div className='card-frofile'>
      <div className='card-frofile__bc' style={{backgroundColor: `${getRandomColor()}`}}></div>
      <img className='card-frofile__img' alt={name} src={img ? img : anonImg} />
      <p className='card-frofile__name'>{name}</p>
      <p className='card-frofile__posts'>posts: {posts.length}</p>
    </div>
  )
}
