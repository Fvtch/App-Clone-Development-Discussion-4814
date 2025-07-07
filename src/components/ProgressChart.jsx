import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiArrowUp } = FiIcons;

const ProgressChart = () => {
  const weeklyData = [
    { day: 'Mon', completed: 8, total: 10 },
    { day: 'Tue', completed: 6, total: 8 },
    { day: 'Wed', completed: 9, total: 12 },
    { day: 'Thu', completed: 7, total: 9 },
    { day: 'Fri', completed: 5, total: 7 },
    { day: 'Sat', completed: 3, total: 4 },
    { day: 'Sun', completed: 2, total: 3 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Weekly Progress</h2>
          <div className="flex items-center space-x-1 text-green-600">
            <SafeIcon icon={FiArrowUp} className="text-sm" />
            <span className="text-sm font-medium">+12%</span>
          </div>
        </div>
        <p className="text-gray-600 mt-1">Task completion rate this week</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {weeklyData.map((data, index) => (
            <motion.div
              key={data.day}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <span className="text-sm font-medium text-gray-600 w-8">{data.day}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(data.completed / data.total) * 100}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-primary-500 h-2 rounded-full"
                />
              </div>
              <span className="text-sm text-gray-600 w-12">
                {data.completed}/{data.total}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiTrendingUp} className="text-primary-600" />
            <span className="text-sm font-medium text-primary-800">
              You're 12% more productive this week!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;