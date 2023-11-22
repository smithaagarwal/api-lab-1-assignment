import request from "supertest";
import { app } from "../app";

describe("Test /coffee endpoint request", () => {
  test("GET /coffee should return correct object", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Latte" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });
  test("GET /coffee with no parameter should return default object", async () => {
    const res = await request(app).get("/coffee");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });
  test("GET /coffee with different parameter should return object with the parameter passed", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Frappe" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Frappe",
    });
  });
});
