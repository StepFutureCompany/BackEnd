import { DataSource } from "typeorm"
import { Funcionario } from "./entity/Funcionario";
import { Empresa } from "./entity/Empresa";
import { ContratoTrabalho } from "./entity/ContratoTrabalho";
import { ControlePonto } from "./entity/ControlePonto";
import { FolhaPagamento } from "./entity/FolhaPagamento";
import { ReciboFerias } from "./entity/ReciboFerias";

const myDataSource = new DataSource({
    type: "postgres",
    "host": "batyr.db.elephantsql.com",
    port: 5432,
    username: "sulzuufb",
    "password": "HU1Gfa1efmrTM8a2j2YxPhawJks9584h",
    database: "sulzuufb",    
    entities: [Empresa, Funcionario, ContratoTrabalho, ControlePonto, FolhaPagamento, ReciboFerias],    
    logging: true,
    synchronize: false,
})

export default myDataSource;