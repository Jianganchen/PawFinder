import { SearchParams } from "./definitions";

// A time out constant to handle server idle error
const TIME_OUT = 6000;

const BASE_URL = "https://frontend-take-home-service.fetch.com";

// ** POST /auth/login **
export async function loginUser(name: string, email: string) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
      credentials: "include",
    });

    if (!res.ok) throw new Error("login failed");

    return res;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
}

// ** POST /auth/logout **
export async function logoutUser() {
  try {
    console.log("Logging out...");
    const res = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!res.ok) throw new Error("logout failed");

    return res;
  } catch (error) {
    console.error("Error logging out:", error);
    return null;
  }
}

// ** GET /dogs/search?{queryParams} **
// To save the trouble of finding the response.next and response.prev
// Here I just calculate the "from" value using pageNumber:
// from = (pageNumber - 1) * 25
export async function getDogsBySearch(
  searchParams: SearchParams,
  timeout = TIME_OUT
) {
  const controller = new AbortController();
  const newTimeoutId = setTimeout(() => controller.abort(), timeout);

  const { ageMax, ageMin, breed, currentPage, size, sort, zipCode } =
    searchParams;

  const queryParams = [
    ageMax && `ageMax=${ageMax}`,
    ageMin && `ageMin=${ageMin}`,
    currentPage && `from=${(currentPage - 1) * 25}`,
    size && `size=${size}`,
    sort && `sort=${sort}`,
    breed && `breeds[]=${breed}`,
    zipCode && `zipCodes[]=${zipCode}`,
  ]
    .filter(Boolean)
    .join("&");

  const route = `${queryParams ? `?${queryParams}` : ""}`;

  try {
    const res = await fetch(`${BASE_URL}/dogs/search${route}`, {
      method: "GET",
      credentials: "include",
    });

    clearTimeout(newTimeoutId);

    if (!res.ok) throw new Error("Not Authenticated");

    return res.json();
  } catch (error) {
    console.error("Error Fetching dogs:", error);
    return null;
  }
}

// ** POST /dogs **
export async function getDogsById(IDs: string[]) {
  try {
    const res = await fetch(`${BASE_URL}/dogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(IDs),
      credentials: "include",
    });

    if (!res.ok) throw new Error("get Dogs by id failed");

    return res;
  } catch (error) {
    console.error("Error getting dogs:", error);
    return null;
  }
}

// ** GET /dogs/breeds **
export async function getAllBreeds() {
  try {
    const res = await fetch(`${BASE_URL}/dogs/breeds`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) throw new Error("Get breeds failed");

    return res.json();
  } catch (error) {
    console.error("Error Fetching breeds:", error);
    return null;
  }
}

// ** POST /dogs/match **
export async function generateMatch(dogIds: string[]) {
  try {
    const res = await fetch(`${BASE_URL}/dogs/match`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dogIds),
      credentials: "include",
    });

    if (!res.ok) throw new Error("generate match failed.");

    return res.json();
  } catch (error) {
    console.error("Error generating match:", error);
    return null;
  }
}
