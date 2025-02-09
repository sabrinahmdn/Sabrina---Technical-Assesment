import request from "supertest";
import path from "path";

const BASE_URL = "https://assessement.onrender.com/api";

jest.setTimeout(50000); // Set a higher timeout for uploads

describe("User Story 1 - Image Upload API", () => {
  
  it("TS01 - should upload a valid image (JPG)", async () => {
    const res = await request(BASE_URL)
      .post("/image")
      .attach("file", "tests/sample.jpg");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("image"); // Check if response contains image URL
  });

  
  it("TS02 - should reject non-image files", async () => {
    const res = await request(BASE_URL)
      .post("/image")
      .attach("file", "tests/sample.txt");

    expect(res.status).toBe(400); // Expect rejection
    expect(res.body).toHaveProperty("error");
  });

  
  it("TS03 - should return an error if no file is uploaded", async () => {
    const res = await request(BASE_URL).post("/image");

    expect(res.status).toBe(400); // Expect error response
    expect(res.body).toHaveProperty("error");
  });

  
  it("TS04 - should reject large images", async () => {
    const res = await request(BASE_URL)
      .post("/image")
      .attach("file", "tests/large_image.jpg");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
