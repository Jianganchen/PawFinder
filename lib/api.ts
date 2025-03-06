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

// ** GET /dogs/search?from={pageNumber} **
export async function getAllDogsByPageNumber(pageNumber: number) {
  try {
    const res = await fetch(`${BASE_URL}/dogs/search?from=${pageNumber}`, {
      method: "GET",
      credentials: "include",
    });

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
