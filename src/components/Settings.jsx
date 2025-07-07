import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiBell, FiShield, FiMoon, FiGlobe, FiSave } = FiIcons;

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      weekly: false
    },
    appearance: {
      darkMode: false,
      language: 'en'
    },
    privacy: {
      analytics: true,
      marketing: false
    }
  });

  const updateSetting = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const settingSections = [
    {
      title: 'Profile Settings',
      icon: FiUser,
      items: [
        { label: 'Full Name', type: 'input', value: 'John Doe' },
        { label: 'Email', type: 'input', value: 'john@example.com' },
        { label: 'Job Title', type: 'input', value: 'Product Manager' }
      ]
    },
    {
      title: 'Notifications',
      icon: FiBell,
      items: [
        { 
          label: 'Email Notifications', 
          type: 'toggle', 
          value: settings.notifications.email,
          onChange: (value) => updateSetting('notifications', 'email', value)
        },
        { 
          label: 'Push Notifications', 
          type: 'toggle', 
          value: settings.notifications.push,
          onChange: (value) => updateSetting('notifications', 'push', value)
        },
        { 
          label: 'Weekly Summary', 
          type: 'toggle', 
          value: settings.notifications.weekly,
          onChange: (value) => updateSetting('notifications', 'weekly', value)
        }
      ]
    },
    {
      title: 'Appearance',
      icon: FiMoon,
      items: [
        { 
          label: 'Dark Mode', 
          type: 'toggle', 
          value: settings.appearance.darkMode,
          onChange: (value) => updateSetting('appearance', 'darkMode', value)
        },
        { 
          label: 'Language', 
          type: 'select', 
          value: settings.appearance.language,
          options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' }
          ],
          onChange: (value) => updateSetting('appearance', 'language', value)
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: FiShield,
      items: [
        { 
          label: 'Analytics Tracking', 
          type: 'toggle', 
          value: settings.privacy.analytics,
          onChange: (value) => updateSetting('privacy', 'analytics', value)
        },
        { 
          label: 'Marketing Emails', 
          type: 'toggle', 
          value: settings.privacy.marketing,
          onChange: (value) => updateSetting('privacy', 'marketing', value)
        }
      ]
    }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Customize your experience and preferences</p>
      </motion.div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={section.icon} className="text-primary-600" />
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between py-3">
                  <div>
                    <label className="text-sm font-medium text-gray-900">{item.label}</label>
                    {item.description && (
                      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                    {item.type === 'toggle' && (
                      <button
                        onClick={() => item.onChange(!item.value)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          item.value ? 'bg-primary-500' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            item.value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    )}
                    
                    {item.type === 'input' && (
                      <input
                        type="text"
                        defaultValue={item.value}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    )}
                    
                    {item.type === 'select' && (
                      <select
                        value={item.value}
                        onChange={(e) => item.onChange(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        {item.options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-end"
      >
        <button className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
          <SafeIcon icon={FiSave} />
          <span>Save Changes</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Settings;