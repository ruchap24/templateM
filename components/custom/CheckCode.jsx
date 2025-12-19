"use client"

import React, { useState } from 'react';
import { diffLines } from 'diff';
import { useTheme } from '@/components/ThemeProvider';

const CheckCode = () => {
  const { theme } = useTheme();
  const [originalText, setOriginalText] = useState('');
  const [modifiedText, setModifiedText] = useState('');
  const [diff, setDiff] = useState([]);

  const compareTexts = () => {
    const differences = diffLines(originalText, modifiedText, { 
      ignoreWhitespace: false 
    });
    setDiff(differences);
  };

  const renderDiffLine = (part, index) => {
    if (part.added) {
      return (
        <tr key={index} className="bg-green-300 dark:bg-green-900">
          <td className="w-8 bg-green-500 dark:bg-green-700 text-right pr-2 text-gray-700 dark:text-gray-300">+</td>
          <td className="pl-2 text-black dark:text-white">{part.value}</td>
        </tr>
      );
    }
    if (part.removed) {
      return (
        <tr key={index} className="bg-red-300 dark:bg-red-900">
          <td className="w-8 bg-red-500 dark:bg-red-700 text-right pr-2 text-gray-700 dark:text-gray-300">-</td>
          <td className="pl-2 text-black dark:text-white">{part.value}</td>
        </tr>
      );
    }
    return (
      <tr key={index}>
        <td className="w-8 text-right pr-2 text-gray-500 dark:text-gray-400">·</td>
        <td className="pl-2 text-gray-900 dark:text-gray-100">{part.value}</td>
      </tr>
    );
  };

  return (
    <div className="container w-full mx-auto p-8 min-h-screen dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700 dark:text-purple-400 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
        Email Template Code Comparison
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col group">
          <label className="text-xl font-bold mb-4 text-center text-slate-900 dark:text-gray-300">
            Original Template Code
          </label>
          <div className="relative">
            <textarea
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-4 min-h-[20rem] 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 
                       shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                       resize-none transition-colors duration-200"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="Paste your original text here..."
            />
          </div>
        </div>

        <div className="flex flex-col group">
          <label className="text-xl font-bold mb-4 text-center text-slate-900 dark:text-gray-300">
            Modified Template Code
          </label>
          <div className="relative">
            <textarea
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-4 min-h-[20rem] 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 
                       shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                       resize-none transition-colors duration-200"
              value={modifiedText}
              onChange={(e) => setModifiedText(e.target.value)}
              placeholder="Paste your modified text here..."
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={compareTexts}
        className="relative bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 hover:from-purple-700 hover:to-purple-800 
                 dark:hover:from-purple-800 dark:hover:to-purple-900 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl 
                 font-medium mx-auto block transition-colors duration-200"
      >
        Compare
      </button>

      {diff.length > 0 && (
        <div className="mt-8">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg 
                        shadow-sm overflow-hidden bg-white dark:bg-gray-900">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr>
                  <th className="w-8 bg-gray-100 dark:bg-gray-800 py-2"></th>
                  <th className="text-left bg-gray-100 dark:bg-gray-800 
                               text-gray-600 dark:text-gray-400 py-2 px-4">
                    Line Content
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {diff.map(renderDiffLine)}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckCode;