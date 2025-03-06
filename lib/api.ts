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

// ** GET /dogs/search?from={pageNumber} **
// To save the trouble of finding the response.next and response.prev
// Here I just calculate the "from" value using pageNumber:
// from = (pageNumber - 1) * 25
export async function getAllDogsByPageNumber(pageNumber: number) {
  try {
    const res = await fetch(
      `${BASE_URL}/dogs/search?from=${(pageNumber - 1) * 25}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

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
