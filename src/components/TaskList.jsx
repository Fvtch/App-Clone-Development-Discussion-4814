import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCircle, FiCheckCircle, FiClock, FiFlag } = FiIcons;

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete project proposal',
      description: 'Finalize the Q4 project proposal for client review',
      completed: false,
      priority: 'high',
      dueDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Review team performance',
      description: 'Conduct quarterly performance reviews',
      completed: true,
      priority: 'medium',
      dueDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'Update website content',
      description: 'Refresh homepage and product pages',
      completed: false,
      priority: 'low',
      dueDate: '2024-01-18'
    },
    {
      id: 4,
      title: 'Prepare presentation',
      description: 'Create slides for Monday morning meeting',
      completed: false,
      priority: 'high',
      dueDate: '2024-01-14'
    }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const priorityColors = {
    high: 'text-red-500',
    medium: 'text-yellow-500',
    low: 'text-green-500'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Recent Tasks</h2>
        <p className="text-gray-600 mt-1">Manage your daily tasks and priorities</p>
      </div>
      
      <div className="p-6 space-y-4">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200 ${
              task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-primary-200'
            }`}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className="flex-shrink-0"
            >
              <SafeIcon
                icon={task.completed ? FiCheckCircle : FiCircle}
                className={`text-xl ${task.completed ? 'text-green-500' : 'text-gray-400 hover:text-primary-500'}`}
              />
            </button>
            
            <div className="flex-1 min-w-0">
              <h3 className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                {task.title}
              </h3>
              <p className={`text-sm mt-1 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                {task.description}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFlag} className={`text-sm ${priorityColors[task.priority]}`} />
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <SafeIcon icon={FiClock} />
                <span>{task.dueDate}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;