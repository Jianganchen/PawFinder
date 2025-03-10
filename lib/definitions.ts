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
  currentPage?: number;
  size: number;
  sort: string;
  zipCode?: string;
  state?: string;
}

// Sort Field Type
export type sortField = "breed" | "name" | "age";

// Search Return Type
export interface SearchResult {
  resultIds: string[];
  next?: string;
  prev?: string;
  total: number;
}

// Match Return Type
export interface MatchResult {
  match: string;
}

// Location Type
export interface Location {
  city: string;
  latitude: number;
  county: string;
  state: string;
  zip_code: string;
  longitude: number;
}

// location search Return Type
export interface LocationSearchResult {
  results: Location[];
  total: number;
}

// A list of States
export const states = [
  { value: "AK", name: "Alaska" },
  { value: "TX", name: "Texas" },
  { value: "AL", name: "Alabama" },
  { value: "AR", name: "Arkansas" },
  { value: "AZ", name: "Arizona" },
  { value: "CA", name: "California" },
  { value: "CO", name: "Colorado" },
  { value: "CT", name: "Connecticut" },
  { value: "DC", name: "DistrictofColumbia" },
  { value: "DE", name: "Delaware" },
  { value: "FL", name: "Florida" },
  { value: "GA", name: "Georgia" },
  { value: "HI", name: "Hawaii" },
  { value: "IA", name: "Iowa" },
  { value: "ID", name: "Idaho" },
  { value: "IL", name: "Illinois" },
  { value: "IN", name: "Indiana" },
  { value: "KS", name: "Kansas" },
  { value: "KY", name: "Kentucky" },
  { value: "LA", name: "Louisiana" },
  { value: "MA", name: "Massachusetts" },
  { value: "MD", name: "Maryland" },
  { value: "ME", name: "Maine" },
  { value: "MI", name: "Michigan" },
  { value: "MN", name: "Minnesota" },
  { value: "MO", name: "Missouri" },
  { value: "MS", name: "Mississippi" },
  { value: "MT", name: "Montana" },
  { value: "NC", name: "NorthCarolina" },
  { value: "ND", name: "NorthDakota" },
  { value: "NE", name: "Nebraska" },
  { value: "NH", name: "NewHampshire" },
  { value: "NJ", name: "NewJersey" },
  { value: "NM", name: "NewMexico" },
  { value: "NV", name: "Nevada" },
  { value: "NY", name: "NewYork" },
  { value: "OH", name: "Ohio" },
  { value: "OK", name: "Oklahoma" },
  { value: "OR", name: "Oregon" },
  { value: "PA", name: "Pennsylvania" },
  { value: "RI", name: "RhodeIsland" },
  { value: "SC", name: "SouthCarolina" },
  { value: "SD", name: "SouthDakota" },
  { value: "TN", name: "Tennessee" },
  { value: "TX", name: "Texas" },
  { value: "UT", name: "Utah" },
  { value: "VA", name: "Virginia" },
  { value: "VT", name: "Vermont" },
  { value: "WA", name: "Washington" },
  { value: "WI", name: "Wisconsin" },
  { value: "WV", name: "WestVirginia" },
  { value: "WY", name: "Wyoming" },
];
