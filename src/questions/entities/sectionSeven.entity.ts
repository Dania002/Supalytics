import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Favorable } from "utility/common/favorable.enum";
import { YesNo } from "utility/common/yesno.enum";

@Entity('sectionSeven')
export class SectionSevenEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Favorable })
  favorable: Favorable;

  @Column({ type: 'enum', enum: YesNo })
  organize: YesNo;

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;

  @ManyToOne(() => UserEntity, user => user.sectionSeven, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  userId: number;
}
