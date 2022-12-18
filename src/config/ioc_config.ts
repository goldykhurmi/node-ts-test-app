import "reflect-metadata";

import { Container } from "inversify";

import {
  Manager
} from "../interfaces";

import SERVICE_IDENTIFIER from "../constants/identifiers";
import { ApiManager } from "../managers/apimanager";
import { TodoClient } from "../clients/todoclient";

let container = new Container();

container.bind<Manager>(SERVICE_IDENTIFIER.APIMANAGER).to(ApiManager);
container.bind<TodoClient>(SERVICE_IDENTIFIER.TODO).to(TodoClient);
export default container;
