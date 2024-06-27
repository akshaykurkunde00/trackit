import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { completeHabit } from '../reducers/habits';

const useAlarm = (habits) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timers = habits.map(habit => {
      if (!habit.alarmTime) return null;

      const now = new Date();
      const alarmDate = new Date(habit.alarmTime);

      if (alarmDate > now) {
        const timeToAlarm = alarmDate - now;

        return setTimeout(() => {
          new Notification('Habit Reminder', {
            body: `Time to complete your habit: ${habit.name}!`,
          });

          dispatch(completeHabit(habit.id));
        }, timeToAlarm);
      }
      return null;
    });

    return () => timers.forEach(timer => timer && clearTimeout(timer));
  }, [habits, dispatch]);
};

export default useAlarm;
