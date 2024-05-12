import React, { useState } from 'react';
import Modal from 'react-modal';

const categories = [
  { id: 1, name: 'Thrill' },
  { id: 2, name: 'Action' },
  { id: 3, name: 'Drama' },
  { id: 4, name: 'Romance' },
  { id: 5, name: 'Education' },
  { id: 6, name: 'Entrepreneurship' },
  // Add more categories here
];

function Categories({ isOpen, closeModal }) {
  const handleCategorySelect = (category) => {
    // Handle category selection
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Select Category"
    >
      <h2>Select a category:</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>
                <button onClick={() => handleCategorySelect(category)}>
                  {category.name}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
export default Categories