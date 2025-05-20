import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { YesNo } from "utility/common/yesno.enum";
import { YesNoCopy } from "utility/common/yesnocopy.enum";

@Entity('sectionNine')
export class SectionNineEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: YesNo })
  ethics: YesNo;

  @Column({ type: 'enum', enum: YesNoCopy })
  responsible: YesNoCopy;

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;

  @ManyToOne(() => UserEntity, user => user.sectionNine, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  userId: number;
}
