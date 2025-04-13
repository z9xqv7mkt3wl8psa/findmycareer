// src/app/data/page.tsx

"use client"; // Add this at the top of the file

import { useState } from 'react';
import { allItems, Item } from './item'; // Import Item here

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'Scholarship' | 'Internship' | 'Loan' | ''>('');

  // Filter the items based on search term and selected type
  const filteredItems: Item[] = allItems.filter((item: Item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? item.type === selectedType : true;
    return matchesSearch && matchesType;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Opportunities</h1>

      {/* Search Bar */}
      <div style={{ margin: '1.5rem 0' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
        />
      </div>

      {/* Filter by Type */}
      <div style={{ marginBottom: '1.5rem' }}>
        <select
          onChange={(e) => setSelectedType(e.target.value as 'Scholarship' | 'Internship' | 'Loan' | '')}
          value={selectedType}
          style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="">All Types</option>
          <option value="Internship">Internships</option>
          <option value="Loan">Loans</option>
          <option value="Scholarship">Scholarships</option>
        </select>
      </div>

      {/* Display Items */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ marginBottom: '1rem' }}>{item.description}</p>
              <p><strong>Last Date:</strong> {item.lastDate}</p>
              <p><strong>Type:</strong> {item.type}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>
                View More →
              </a>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
