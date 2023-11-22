import request from "supertest";
import { app } from "../app";

describe("Test /tea endpoint request", () => {
  test("GET /tea should return correct object", async () => {
    const res = await request(app)
      .get("/tea")
      .query({ teaName: "Masala Chai" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Masala Chai",
    });
  });
  test("GET /tea with no parameter should return default object", async () => {
    const res = await request(app).get("/tea");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Masala Chai",
    });
  });
  test("GET /tea with different parameter should return object with the parameter passed", async () => {
    const res = await request(app).get("/tea").query({ teaName: "Bubble Tea" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Bubble Tea",
    });
  });
});
