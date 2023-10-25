import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbFolhaPagamento' })
export class FolhaPagamento {

    @PrimaryGeneratedColumn()
    idFolhaPagamento: number;

    @Column()
    idFuncionario: number;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: 'idfuncionario' })
    funcionario: Funcionario;

    @Column({ type: 'date', nullable: false })
    dtReferencia: Date;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    vlBase: number;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    vlDescontos: number;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    vlBonus: number;
}
