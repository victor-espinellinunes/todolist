import React, { useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const logout = () => {
    setLoggedIn(false);
    setTasks([]);
  };

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        tasks,
        addTask,
        completeTask,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
