import { useState } from 'react';

interface Dish {
  id: number;
  name: string;
}

interface AllDishesProps {
  dishes: Dish[]; // Utilize o tipo ou interface para as props
}

const AllDishes: React.FC<AllDishesProps> = ({ dishes }) => {
  const [showAllDishes, setShowAllDishes] = useState(false);

  const allDishes = showAllDishes ? dishes : dishes.slice(0, 4);

  return (
    <div>
      <h2>Todos os Pratos</h2>
      <ul>
        {allDishes.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>

      {!showAllDishes && (
        <button onClick={() => setShowAllDishes(true)}>Ver Todos</button>
      )}
    </div>
  );
};

export default AllDishes;
