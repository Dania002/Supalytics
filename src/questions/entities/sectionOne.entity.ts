import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { EmployeeCount } from "utility/common/employeeCount .enum";

@Entity('sectionOne')
export class SectionOneEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    businessAddress: string;

    @Column()
    city: string;

    @Column()
    postalCode: string;

    @Column()
    country: string;

    @Column()
    companyWebsite: string;

    @Column()
    primaryContactName: string;

    @Column({ unique: true })
    primaryContactEmail: string;

    @Column()
    primaryContactPhoneNumber: string;

    @Column()
    natureOfServicesProvided: string;

    @Column({ type: 'enum', enum: EmployeeCount })
    numberOfEmployees: EmployeeCount;

    @Column()
    established: string;

    @Column()
    certifications: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @ManyToOne(() => UserEntity, user => user.sectionOne, { onDelete: 'CASCADE' })
    user: UserEntity;

    @Column()
    userId: number;
}
