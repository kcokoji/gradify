"use client";

import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

// Define the grade options
const gradeOptions = [
  { value: "5", text: "A" },
  { value: "4", text: "B" },
  { value: "3", text: "C" },
  { value: "2", text: "D" },
  { value: "1", text: "E" },
  { value: "0", text: "F" },
];

// Define the grade ranges and their corresponding labels
const gradeLabels = [
  { min: 4.5, max: 5.0, label: "First Class" },
  { min: 3.5, max: 4.49, label: "Second Class Upper" },
  { min: 2.4, max: 3.49, label: "Second Class Lower" },
  { min: 1.5, max: 2.39, label: "Third Class" },
  { min: 0, max: 1.5, label: "Pass" },
];

const Table = () => {
  const [data, setData] = useState([
    { id: 1, col1: "", col2: "", col3: "1", col4: "5" },
  ]);
  const [calculatedScore, setCalculatedScore] = useState(null);
  const [gradeLabel, setGradeLabel] = useState("");

  const addRow = () => {
    const newRow = {
      id: data.length + 1,
      col1: "",
      col2: "",
      col3: "1",
      col4: "5",
    };

    setData([...data, newRow]);
  };

  const handleInputChange = (id, colName, value) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, [colName]: value } : row
    );
    setData(updatedData);
  };

  const deleteRow = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    for (let i = 0; i < updatedData.length; i++) {
      updatedData[i].id = i + 1;
    }
    setData(updatedData);
  };

  const calculateScore = () => {
    const totalUnits = data.reduce(
      (sum, row) => sum + parseInt(row.col3, 10),
      0
    );
    const weightedSum = data.reduce(
      (sum, row) => sum + parseInt(row.col3, 10) * parseInt(row.col4, 10),
      0
    );

    if (totalUnits === 0) {
      return "N/A"; // Avoid division by zero
    }

    const score = weightedSum / totalUnits;
    return score.toFixed(2); // Display score with two decimal places
  };

  const calculateGradeLabel = (score) => {
    for (const grade of gradeLabels) {
      if (score >= grade.min && score <= grade.max) {
        return grade.label;
      }
    }
    return "Unknown"; // If the score doesn't fall into any range
  };

  const handleCalculateScore = () => {
    const score = calculateScore();
    setCalculatedScore(score);
    const label = calculateGradeLabel(score);
    setGradeLabel(label);
  };

  return (
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8 sm:max-w-3xl max-w-xl mx-auto border border-green-700 my-10 rounded-md">
      <div className="max-w-2xl text-center mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          GPA Calculator
        </h1>
      </div>
      <div className="w-full mt-10 overflow-x-auto">
        <table className="w-full border-collapse border divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Course Code
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Unit (Select 1-10)
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Grade (Select A-F)
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={row.id}>
                <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={row.col1}
                    onChange={(e) =>
                      handleInputChange(row.id, "col1", e.target.value)
                    }
                    className="border-none rounded-md w-20 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 text-sm leading-6"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={row.col2}
                    onChange={(e) =>
                      handleInputChange(row.id, "col2", e.target.value)
                    }
                    className="border-none rounded-md w-full px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 text-sm leading-6"
                  />
                </td>
                <td className="px-4 py-2">
                  <select
                    value={row.col3}
                    onChange={(e) =>
                      handleInputChange(row.id, "col3", e.target.value)
                    }
                    className="border-none rounded-md w-20 px-2 sm:3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 text-sm leading-6"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2">
                  <select
                    value={row.col4}
                    onChange={(e) =>
                      handleInputChange(row.id, "col4", e.target.value)
                    }
                    className="border-none rounded-md w-20  px-2 sm:3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 text-sm leading-6"
                  >
                    {gradeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteRow(row.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                  >
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addRow}
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-4 mt-4 mb-2 mr-6 rounded self-end text-md"
        >
          Add Row
        </button>
        <button
          onClick={handleCalculateScore}
          className="bg-white hover:bg-green-700 text-green-700 border border-green-700 hover:text-white font-bold py-3 px-4 mt-4 mb-2 rounded self-end text-md"
        >
          Calculate Score
        </button>
        {calculatedScore !== null && (
          <div className="mt-4">
            <p className="text-2xl">
              Your GPA score is:{" "}
              <span className="text-3xl font-bold">{calculatedScore}</span>
            </p>
            <p className="text-lg">
              {gradeLabel && `Your Degree: ${gradeLabel}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
