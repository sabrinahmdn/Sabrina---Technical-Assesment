jest.setTimeout(50000); // Sets timeout
import request from "supertest";

const BASE_URL = "https://assessement.onrender.com/api";

describe("User Story 2 - Upload ZIP", () => {
  it("should upload a zip file successfully", async () => {
    const res = await request(BASE_URL)
      .post("/zip")
      .attach("file", "tests/sample.zip");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("images");
    expect(Array.isArray(res.body.images)).toBe(true);
  });

  it("should reject non-zip files", async () => {
    const res = await request(BASE_URL)
      .post("/zip")
      .attach("file", "tests/sample.jpg");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("images");
    expect(Array.isArray(res.body.images)).toBe(true); //need a token to test this
  });

  it("should reject an empty zip file", async () => {
    const res = await request(BASE_URL)
      .post("/zip")
      .attach("file", "tests/empty.zip");
  
    expect(res.status).toBe(400);  // Bad request
    expect(res.body).toHaveProperty("message", "File is empty or invalid");
  });
  
});
