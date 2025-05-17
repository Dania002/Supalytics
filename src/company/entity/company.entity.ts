import { UserEntity } from "src/auth/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Companies } from "utility/common/companies.enum";

@Entity()
export class CompanyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: Companies, unique: true })
    name: Companies;

    @OneToMany(() => UserEntity, (users) => users.company)
    users: UserEntity[];
}
