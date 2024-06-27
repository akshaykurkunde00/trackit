
export const addHabit = (habit) => ({
    type: 'ADD_HABIT',
    payload: habit
  });
  


export const completeHabit = (habitId, completedDate) => ({
    type: 'COMPLETE_HABIT',
    payload: { habitId, completedDate }
  });
  
  export const deleteHabit = (habitId) => ({
    type: 'DELETE_HABIT',
    payload: habitId
  });
  
  