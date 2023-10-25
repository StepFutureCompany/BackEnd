import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbcontratotrabalho' })
export class ContratoTrabalho {

    @PrimaryGeneratedColumn()
    idContrato: number;

    @Column()
    idFuncionario: number;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: 'idfuncionario' })
    funcionario: Funcionario;

    @Column({ type: 'date', nullable: false })
    dtInicioContrato: Date;

    @Column({ type: 'date', nullable: true })
    dtFimContrato: Date;

    @Column({ type: 'text', nullable: true })
    dsTermosContrato: string;
}
