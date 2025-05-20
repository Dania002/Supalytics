import { SectionFourEntity } from "src/questions/entities/sectionFour.entity";
import { SectionFiveEntity } from "src/questions/entities/sectionFive.entity";
import { SectionOneEntity } from "src/questions/entities/sectionOne.entity";
import { SectionThreeEntity } from "src/questions/entities/sectionThree.entity";
import { SectionTwoEntity } from "src/questions/entities/sectionTwo.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Companies } from "utility/common/companies.enum";
import { Roles } from "utility/common/roles.enum";
import { SectionSixEntity } from "src/questions/entities/sectionSix.entity";
import { SectionSevenEntity } from "src/questions/entities/sectionSeven.entity";
import { SectionEightEntity } from "src/questions/entities/sectionEight.entity";
import { SectionNineEntity } from "src/questions/entities/sectionNine.entity";
import { CompanyEntity } from "src/company/entity/company.entity";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ type: 'enum', enum: Companies })
    companyName: Companies;

    @Column()
    addressLineOne: string;

    @Column({ nullable: true })
    addressLineTwo: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: Roles })
    role: Roles;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @ManyToOne(() => CompanyEntity, (company) => company.users)
    @JoinColumn({ name: 'companyId' })
    company: CompanyEntity;

    @Column()
    companyId: number; // this column is what stores the FK

    @OneToMany(() => SectionOneEntity, section => section.user)
    sectionOne: SectionOneEntity[];

    @OneToMany(() => SectionTwoEntity, section => section.user)
    sectionTwo: SectionTwoEntity[];

    @OneToMany(() => SectionThreeEntity, section => section.user)
    sectionThree: SectionThreeEntity[];

    @OneToMany(() => SectionFourEntity, section => section.user)
    sectionFour: SectionFourEntity[];

    @OneToMany(() => SectionFiveEntity, section => section.user)
    sectionFive: SectionFiveEntity[];

    @OneToMany(() => SectionSixEntity, section => section.user)
    sectionSix: SectionSixEntity[];

    @OneToMany(() => SectionSevenEntity, section => section.user)
    sectionSeven: SectionSevenEntity[];

    @OneToMany(() => SectionEightEntity, section => section.user)
    sectionEight: SectionEightEntity[];

    @OneToMany(() => SectionNineEntity, section => section.user)
    sectionNine: SectionNineEntity[];
}
