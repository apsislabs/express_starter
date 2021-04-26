import supertest from "supertest";
import { createServer } from "../../src/server";

const server = createServer();

describe("root", () => {
  it("should 200", async () => {
    await supertest(server).get("/").expect(200);
  });
});
