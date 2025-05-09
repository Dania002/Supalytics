import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Hours } from "utility/common/hours.enum";
import { Raise } from "utility/common/raise.enum";

@Entity('sectionSix')
export class SectionSixEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Hours })
  hours: Hours;

  @Column({ type: 'enum', enum: Raise })
  raise: Raise;

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;

  @ManyToOne(() => UserEntity, user => user.sectionSix, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  userId: number;
}
