import { inject, injectable } from "inversify";
import { Manager } from "../interfaces";
import SERVICE_IDENTIFIER from "../constants/identifiers";
import { TodoClient } from "../clients/todoclient";

@injectable()
export class ApiManager implements Manager {

    public name: any;

    @inject(SERVICE_IDENTIFIER.TODO) public todoclient: TodoClient;

    public async fetchData() {
        return await this.todoclient.getTodo();
    }
}


