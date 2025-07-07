import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiTarget, FiClock, FiCalendar } = FiIcons;

const Analytics = () => {
  const analyticsData = [
    {
      title: 'Tasks Completed This Week',
      value: '28',
      change: '+15%',
      icon: FiTarget,
      color: 'green'
    },
    {
      title: 'Average Completion Time',
      value: '2.5h',
      change: '-12%',
      icon: FiClock,
      color: 'blue'
    },
    {
      title: 'Productivity Score',
      value: '92%',
      change: '+8%',
      icon: FiTrendingUp,
      color: 'purple'
    },
    {
      title: 'Streak Days',
      value: '12',
      change: '+3',
      icon: FiCalendar,
      color: 'orange'
    }
  ];

  const weeklyProgress = [
    { week: 'Week 1', completed: 22, total: 28 },
    { week: 'Week 2', completed: 18, total: 25 },
    { week: 'Week 3', completed: 25, total: 30 },
    { week: 'Week 4', completed: 28, total: 32 }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your productivity and performance metrics</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {analyticsData.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-lg ${
                stat.color === 'green' ? 'bg-green-50 text-green-600' :
                stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                stat.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                'bg-orange-50 text-orange-600'
              }`}>
                <SafeIcon icon={stat.icon} className="text-xl" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h3>
          <div className="space-y-4">
            {weeklyProgress.map((week, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-600 w-16">{week.week}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(week.completed / week.total) * 100}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-primary-500 h-3 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-600 w-16">
                  {week.completed}/{week.total}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Insights */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <SafeIcon icon={FiTrendingUp} className="text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-green-800">Great Progress!</p>
                <p className="text-xs text-green-600">You completed 15% more tasks this week</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <SafeIcon icon={FiTarget} className="text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-blue-800">Goal Achievement</p>
                <p className="text-xs text-blue-600">92% of weekly goals completed</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <SafeIcon icon={FiClock} className="text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-purple-800">Time Efficiency</p>
                <p className="text-xs text-purple-600">Average task completion improved by 12%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;