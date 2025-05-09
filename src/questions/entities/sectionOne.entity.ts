import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Clients } from "utility/common/clients.enum";
import { JobCategory } from "utility/common/jobCategory.enum";
import { WRO } from "utility/common/wro.enum";


@Entity('sectionOne')
export class SectionOneEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    jobTitle: string;

    @Column({ type: 'enum', enum: JobCategory })
    jobCategory: JobCategory;

    @Column({ type: 'enum', enum: Clients })
    clients: Clients;

    @Column({ nullable: true })
    registeredName: string;

    @Column({ nullable: true })
    licensingScheme: string;

    @Column({ nullable: true })
    licenseNumber: string;

    @Column({ nullable: true })
    licenseExpiryDate : string;

    @Column({ nullable: true })
    additionalCertification: string;

    @Column({ nullable: true })
    certificationNumber : string;

    @Column({ nullable: true })
    certificationExpiryDate: string;

    @Column({ type: 'enum', enum: WRO })
    wro: WRO;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @ManyToOne(() => UserEntity, user => user.sectionOne, { onDelete: 'CASCADE' })
    user: UserEntity;

    @Column()
    userId: number;
}
