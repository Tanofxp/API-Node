import { DataSource } from "typeorm";
import { Task } from "../entity/task";

export default new DataSource({

    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "dani",
    entities: [Task],
    synchronize: true,
    logging: false,

})