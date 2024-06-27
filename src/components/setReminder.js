import React, { useState } from 'react';

const SetReminder = ({ habit, onClose, onSave }) => {
  const [alarmTime, setAlarmTime] = useState(habit.alarmTime || '');

  const handleSave = () => {
    onSave(habit.id, alarmTime);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Set Reminder for {habit.name}</h2>
        <input
          type="datetime-local"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SetReminder;
