import axios from "axios";

jest.mock("axios");

describe("Testing service api.ts", () => {
  it("should be able transforms json response into object", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockRejectedValue("Network error: Something went wrong");
    mockedAxios.get.mockResolvedValue({ data: {} });
  });
});
