import { AxiosResponse } from "axios";
import "jest";
import container from "../../src/config/ioc_config";
import SERVICE_IDENTIFIER from "../../src/constants/identifiers";
import { ApiManager } from "../../src/managers/apimanager";

describe("Client Injection Test Case", () => {
  test("Verify if client is intected", () => {
    let apiManager = container.get<ApiManager>(SERVICE_IDENTIFIER.APIMANAGER);
    apiManager.todoclient.getTodo().then((res: AxiosResponse) => {
      expect(res.status).toBe(200);
    });
  });
});
