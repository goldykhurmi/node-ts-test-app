import { AxiosResponse } from "axios";
import "jest";
import container from "../../src/config/ioc_config";
import SERVICE_IDENTIFIER from "../../src/constants/identifiers";
import { ApiManager } from "../../src/managers/apimanager";

describe("Todo Test Case", () => {
  test("Verify todo Api call is working", () => {
    let apiManager = container.get<ApiManager>(SERVICE_IDENTIFIER.APIMANAGER);
    apiManager.fetchData().then((res: AxiosResponse) => {
      expect(res.status).toBe(200);
    });
  });
});
