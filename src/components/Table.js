import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    search: '',
    searchWord: '',
  });

  const [formErrors, setFormErrors] = useState({
    search: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

  
    if (name === 'search') {
      const isValid = /^[a-zA-Z]+$/.test(value);
      setFormErrors({
        ...formErrors,
        [name]: isValid ? '' : 'Only letters are allowed for search.',
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formErrors.search && formData.search.trim() !== '') {

      console.log('Form submitted:', formData);
    } else {
      console.error('Form has errors. Please fix them before submitting.');
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            name="search"
            value={formData.search}
            onChange={handleInputChange}
            maxLength={100}
            pattern="[A-Za-z]+"
            required
          />
          <span style={{ color: 'red' }}>{formErrors.search}</span>
        </label>
        <br />
        <label>
          Search Word:
          <input
            type="text"
            name="searchWord"
            value={formData.searchWord}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
