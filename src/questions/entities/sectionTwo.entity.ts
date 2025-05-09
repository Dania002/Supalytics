import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Apply } from "utility/common/apply.enum";
import { Effectiveness } from "utility/common/effectiveness.enum";
import { Implementation } from "utility/common/implementation.enum";
import { Law } from "utility/common/law.enum";
import { Policies } from "utility/common/policies.enum";
import { Procedures } from "utility/common/procedures.enum";
import { YesNo } from "utility/common/yesno.enum";

@Entity('sectionTwo')
export class SectionTwoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: Policies })
    policies: Policies;

    @Column()
    upload: string;

    @Column({ type: 'enum', enum: Procedures })
    procedures: Procedures;
     
    @Column({ type: 'enum', enum: YesNo })
    accountable: YesNo;
    
    @Column({ type: 'enum', enum: Apply })
    apply: Apply;

    @Column({ type: 'enum', enum: Law })
    law: Law;

    @Column({ type: 'enum', enum: Implementation })
    implementation: Implementation;

    @Column({ type: 'enum', enum: Effectiveness })
    effectiveness: Effectiveness;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @ManyToOne(() => UserEntity, user => user.sectionTwo, { onDelete: 'CASCADE' })
    user: UserEntity;

    @Column()
    userId: number;
}
