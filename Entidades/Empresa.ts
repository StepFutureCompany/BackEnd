import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbEmpresa' })
export class Empresa {

    @PrimaryGeneratedColumn()
    idEmpresa: number;

    @OneToMany(() => Funcionario, funcionario => funcionario.empresa)
    funcionarios: Funcionario[];
    

    @Column({ type: 'varchar', length: 255, nullable: false })
    nmEmpresa: string;

    @Column({ type: 'varchar', length: 14, nullable: false, unique: true })
    cnpjEmpresa: string;

    @Column({ type: 'text', nullable: true })
    enderecoEmpresa: string;

    @Column({ type: 'varchar', length: 15, nullable: true })
    telefoneEmpresa: string;
}