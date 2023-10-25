import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbReciboFerias' })
export class ReciboFerias {

    @PrimaryGeneratedColumn()
    idRecibo: number;

    @Column()
    idFuncionario: number;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: 'idfuncionario' })
    funcionario: Funcionario;

    @Column({ type: 'date', nullable: false })
    dtInicioFerias: Date;

    @Column({ type: 'date', nullable: false })
    dtFimFerias: Date;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    vlFerias: number;
}
