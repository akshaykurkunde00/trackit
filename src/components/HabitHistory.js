import React from 'react';
import { useSelector } from 'react-redux';

const HabitHistory = () => {
  const history = useSelector(state => state.habits.history);

  return (
    <div>
      <h2>Habit History</h2>
      <ul>
        {history.map((record, index) => (
          <li key={index}>
           Habit of {record.name} - Completed on {new Date(record.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitHistory;
