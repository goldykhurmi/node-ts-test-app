import { injectable } from "inversify";
import axios from "axios";

@injectable()
export class TodoClient {
    public async getTodo() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}
