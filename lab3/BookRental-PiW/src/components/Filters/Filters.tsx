import React, { useState } from 'react';
import './Filters.css';

interface FiltersProps {
  onFilterChange: (filters: Partial<FiltersState>) => void;
}

interface FiltersState {
  priceMin: number;
  priceMax: number;
  cover: 'Miękka' | 'Twarda' | '';
  pagesMin: number;
  pagesMax: number;
  author: string;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FiltersState>({
    priceMin: 0,
    priceMax: Infinity,
    cover: '',
    pagesMin: 0,
    pagesMax: Infinity,
    author: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue = name.includes('Min') || name.includes('Max') ? Number(value) : value;
    const updatedFilters = { ...filters, [name]: updatedValue };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filters">
      <h1 className="filters-title">FILTRY</h1>

      <div className="filter-part">
        <div className="cost-label">Cena</div>
        <div className="cost-inputs">
          <input
            type="number"
            name="priceMin"
            className="cost-input"
            placeholder="od"
            min="0"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="priceMax"
            className="cost-input"
            placeholder="do"
            min="0"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="filter-part">
        <div className="cover-type">Okładka</div>
        <input
          type="radio"
          id="soft-cover"
          name="cover"
          value="Miękka"
          onChange={handleInputChange}
        />
        <label htmlFor="soft-cover" className="choice-button">Miękka</label>

        <input
          type="radio"
          id="hard-cover"
          name="cover"
          value="Twarda"
          onChange={handleInputChange}
        />
        <label htmlFor="hard-cover" className="choice-button">Twarda</label>
      </div>

      <div className="filter-part">
        <div className="pages-label">Ilość stron</div>
        <div className="pages-inputs">
          <input
            type="number"
            name="pagesMin"
            className="cost-input"
            placeholder="od"
            min="0"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="pagesMax"
            className="cost-input"
            placeholder="do"
            min="0"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="filter-part">
        <input
          type="search"
          name="author"
          className="filter-search"
          placeholder="Autor"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Filters;