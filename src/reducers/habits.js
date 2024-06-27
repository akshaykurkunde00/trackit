import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
  history: [],
};

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    completeHabit: (state, action) => {
      const habit = state.habits.find(h => h.id === action.payload);
      if (habit) {
        habit.completed = true;
        state.history.push({ ...habit, date: new Date().toISOString() });
      }
    },
    resetHabits: (state) => {
      state.habits.forEach(habit => habit.completed = false);
    },
    setAlarm: (state, action) => {
      const { id, time } = action.payload;
      const habit = state.habits.find(h => h.id === id);
      if (habit) {
        habit.alarmTime = time;
      }
    },
  },
});

export const { addHabit, completeHabit, resetHabits, setAlarm } = habitSlice.actions;
export default habitSlice.reducer;
