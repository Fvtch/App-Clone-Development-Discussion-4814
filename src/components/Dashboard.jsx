import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import StatsCard from './StatsCard';
import TaskList from './TaskList';
import ProgressChart from './ProgressChart';

const { FiTrendingUp, FiCheckCircle, FiClock, FiTarget } = FiIcons;

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Tasks',
      value: '24',
      change: '+12%',
      icon: FiTarget,
      color: 'blue'
    },
    {
      title: 'Completed',
      value: '18',
      change: '+8%',
      icon: FiCheckCircle,
      color: 'green'
    },
    {
      title: 'In Progress',
      value: '4',
      change: '+2%',
      icon: FiClock,
      color: 'yellow'
    },
    {
      title: 'Productivity',
      value: '89%',
      change: '+5%',
      icon: FiTrendingUp,
      color: 'purple'
    }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your productivity overview.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            New Task
          </button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Task List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <TaskList />
        </motion.div>

        {/* Progress Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ProgressChart />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;