import React from 'react';

import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
