import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const categories = [
  { id: 1, name: 'Thrill' },
  { id: 2, name: 'Action' },
  { id: 3, name: 'Drama' },
  { id: 4, name: 'Romance' },
  { id: 5, name: 'Education' },
  { id: 6, name: 'Entrepreneurship' },
  { id: 7, name: 'Adventure' },
  { id: 8, name: 'Horror' },
  { id: 9, name: 'Mystery' },
  { id: 10, name: 'Paranormal' },
  { id: 11, name: 'Sci-Fi' },
  { id: 12, name: 'Fantasy' },
  { id: 13, name: 'Humor' },
  { id: 14, name: 'Pottery' },
  { id: 15, name: 'LGBTQ+' },
  { id: 16, name: 'Romance' },
  { id: 17, name: 'Leadership' },
  { id: 18, name: 'Health' },
  // Add more categories here
];

function CategoriesWrite({ open, handleCloseModalWrite, anchorButtonId }) {
  const anchorButton = document.getElementById(anchorButtonId);
  const buttonRect = anchorButton?.getBoundingClientRect();

  const modalStyle = {
    position: 'absolute',
    top: buttonRect ? `${buttonRect.bottom}px` : '50%',
    left: buttonRect ? `${buttonRect.left}px` : '50%',
    transform: buttonRect ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.3)',
    padding: '20px',
  };

  const tableStyle = {
    width: '100%',
  };

  const columnCount = 4;
  const rowCount = Math.ceil(categories.length / columnCount);
  const rows = Array.from({ length: rowCount }, (_, index) =>
    categories.slice(index * columnCount, (index + 1) * columnCount)
  );

  const buttonStyle = {
    margin: '5px', // Add margin to create space between buttons
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModalWrite}
      aria-labelledby="categories-modal-title"
      aria-describedby="categories-modal-description"
    >
      <div style={modalStyle}>
        <h2 id="categories-modal-title">Categories</h2>
        <table style={tableStyle}>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr id='tablerow' key={rowIndex}>
                {row.map((category) => (
                  <td class='btn' key={category.id}>
                    <Button onClick={() => console.log(category.name)}>{category.name}</Button>
                  </td>
                ))}
                {row.length < columnCount && (
                  // Add empty cells to fill up the row
                  Array.from({ length: columnCount - row.length }, (_, index) => (
                    <td key={`empty-${index}`} />
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={handleCloseModalWrite}>Close</Button>
      </div>
    </Modal>
  );
}

export default CategoriesWrite;
