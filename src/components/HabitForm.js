import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../reducers/habits';

const HabitForm = () => {
  const [name, setName] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addHabit({ id: Date.now().toString(), name, completed: false, alarmTime }));
      setName('');
      setAlarmTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter habit name"
      />
     
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
