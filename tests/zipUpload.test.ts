import request from "supertest";
import path from "path";

const BASE_URL = "https://assessement.onrender.com/api";

jest.setTimeout(50000); // Increase timeout for large uploads

describe("User Story 2 - ZIP Upload API", () => {
  
  it("TS05 - should upload a valid ZIP file containing images", async () => {
    const res = await request(BASE_URL)
      .post("/zip")
      .attach("file", "tests/sample.zip");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("images"); // Expect image URLs in response
  });

  
  it("TS06 - should reject an empty ZIP file", async () => {
    const res = await request(BASE_URL)
      .post("/zip")
      .attach("file", "tests/empty.zip");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  
  it("TS07 - should reject non-ZIP files", async () => {
    const res = await request(BASE_URL)
      .post("/zip")
      .attach("file", "tests/sample.txt");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

 
  it("TS08 - should reject a corrupted ZIP file", async () => {
    const res = await request(BASE_URL)
      .post("/zip")
      .attach("file", "tests/corrupted.zip");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
