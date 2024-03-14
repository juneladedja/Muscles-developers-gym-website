import React, { useState } from 'react';
import axios from 'axios';

function MealPlanner() {
  const [date, setDate] = useState('');
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://api.edamam.com/api/mealplanner/v2?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&timeFrame=day&date=${date}`);
      setMealPlan(response.data);
      setLoading(false);
    } catch (error) {
      setError('An error occurred while fetching meal plan. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Meal Planner</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <button type="submit" disabled={loading}>Get Meal Plan</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {mealPlan && (
        <div>
          <h2>Meal Plan for {date}</h2>
          {mealPlan.meals.map((meal, index) => (
            <div key={index}>
              <h3>{meal.name}</h3>
              <ul>
                {meal.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MealPlanner;