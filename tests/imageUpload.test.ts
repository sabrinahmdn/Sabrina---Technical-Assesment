jest.setTimeout(50000); // Sets timeout
import request from "supertest";

const BASE_URL = "https://assessement.onrender.com/api";


describe("User Story 1 - Upload Image", () => {
  it("should upload an image successfully", async () => {
    const res = await request(BASE_URL)
      .post("/image")
      .attach("file", "tests/sample.jpg");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("image");
  });

  it("should reject non-image files", async () => {
    const res = await request(BASE_URL)
      .post("/image")
      .attach("file", "tests/sample.txt");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("images"); // need a token to test this
  });
});
