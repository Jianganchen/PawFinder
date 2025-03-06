// This file contains type definitions for all the data used in this app.
// It describes the shape of the data, and what data type each property should accept.

// User Types
export interface User {
  name: string;
  email: string;
}

// Dos Types
export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

// Search Return Type
export interface SearchResult {
  resultIds: string[];
  next?: string;
  prev?: string;
  total: number;
}
