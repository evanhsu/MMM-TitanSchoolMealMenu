/**
 * This test suite is intended to verify that the shape of the response
 * from the Titan Schools API is being recognized and parsed correctly
 * by our client library.
 */
const axios = require("axios").default;

describe.skip("TitanSchools API response shape", () => {
  let apiResponse;
  const buildingId = "9017b6ae-a3bc-eb11-a2cb-82fe13669c55";
  const districtId = "93f76ff0-2eb7-eb11-a2c4-e816644282bd";

  beforeAll(async () => {
    const client = axios.create({
      baseURL: "https://family.titank12.com/api/",
      timeout: 30000
    });

    // Log the outbound request
    client.interceptors.request.use((request) => {
      console.log(
        JSON.stringify({
          url: request.url,
          params: request.params
        })
      );
      return request;
    });

    const axiosResponse = await client.get("/FamilyMenu", {
      params: {
        buildingId,
        districtId
      }
    });

    apiResponse = axiosResponse.data;
  });

  it("Gets a response", () => {
    expect(apiResponse).toBeDefined();
  });
});
