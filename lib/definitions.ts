// This file contains type definitions for all the data used in this app.
// It describes the shape of the data, and what data type each property should accept.

// User Type
export interface User {
  name: string;
  email: string;
}

// Dos Type
export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

// Breed Type
export type Breeds = string[];

// Search Parameters Type
export interface SearchParams {
  ageMax?: number;
  ageMin?: number;
  breed?: string;
  from?: number;
  size: number;
  sortDirection?: "asc" | "desc";
  sortField?: "breed" | "name" | "age";
  zipCode?: string;
}

// Search Return Type
export interface SearchResult {
  resultIds: string[];
  next?: string;
  prev?: string;
  total: number;
}
