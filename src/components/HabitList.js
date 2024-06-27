import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeHabit, setAlarm } from '../reducers/habits';
import useAlarm from './useAlarm';
import SetReminder from './setReminder';
import { FaBell } from "react-icons/fa6";
import { GrCompliance } from "react-icons/gr";

const HabitList = () => {
  const habits = useSelector(state => state.habits.habits);
  const dispatch = useDispatch();
  const [selectedHabit, setSelectedHabit] = useState(null);

  useAlarm(habits);

  const handleComplete = (id) => {
    dispatch(completeHabit(id));
  };

  const handleSetReminder = (habit) => {
    setSelectedHabit(habit);
  };

  const handleSaveReminder = (id, alarmTime) => {
    dispatch(setAlarm({ id, time: alarmTime }));
  };

  return (
    <div>
      <h2>Habit List</h2>
      <ul>
        {habits.map(habit => (
          <li key={habit.id}>
            <div>
              <strong>{habit.name}</strong> - <p>{habit.completed ? 'Completed' : 'Pending'}</p>
              {habit.alarmTime && <p>Alarm set for: {new Date(habit.alarmTime).toLocaleString()}</p>}
            </div>
            <div>
              <button className="icon-button" onClick={() => handleComplete(habit.id)}>
              <GrCompliance />
              </button>
              <button className="icon-button" onClick={() => handleSetReminder(habit)}>
              <FaBell />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedHabit && (
        <SetReminder
          habit={selectedHabit}
          onClose={() => setSelectedHabit(null)}
          onSave={handleSaveReminder}
        />
      )}
    </div>
  );
};

export default HabitList;
