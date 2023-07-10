import React, { useEffect, useState } from 'react';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import style from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://react-course-http-199fd-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
        );
        if (!response.ok) {
          throw new Error('Something went Wrong ☹️☹️ ');
        }
        const data = await response.json();

        const loadedMeals = [];
        for (const key in data) {
          const newMeal = {
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          };
          loadedMeals.push(newMeal);
        }
        setMeals(loadedMeals);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  if (isLoading) {
    return (
      <section>
        <p className={style['meals-loading']}>🔍 searching for meals....</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p className={style['meals-error']}>{error}</p>
      </section>
    );
  }

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
