import { AxiosResponse } from "axios";
import container from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import { ApiManager } from "./managers/apimanager";

let apiManager = container.get<ApiManager>(SERVICE_IDENTIFIER.APIMANAGER);

apiManager.fetchData().then((res: AxiosResponse) => {
    console.log(res.data[0]);
});
