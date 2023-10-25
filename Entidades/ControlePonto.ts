import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    Timestamp
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbcontroleponto' })
export class ControlePonto {

    @PrimaryGeneratedColumn()
    idPonto: number;

    @Column()
    idFuncionario: number;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: 'idfuncionario' })
    funcionario: Funcionario;

    @Column({ type: 'timestamp', nullable: false })
    dtHrEntrada: Date;

    @Column({ type: 'timestamp', nullable: true })
    dtHrSaida: Date;
}
