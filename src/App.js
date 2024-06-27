import React from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import HabitHistory from './components/HabitHistory';
import './App.css'


const App = () => {
  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm />
      <HabitList />
      <HabitHistory />
    </div>
  );
};

export default App;
