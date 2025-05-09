import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Migrate } from "utility/common/migrate.enum";
import { Move } from "utility/common/move.emun";

@Entity('sectionThree')
export class SectionThreeEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Move })
  move: Move;

  @Column({ type: 'enum', enum: Migrate })
  migrate: Migrate;

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;

  @ManyToOne(() => UserEntity, user => user.sectionThree, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  userId: number;
}
