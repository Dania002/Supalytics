import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Compliance } from "utility/common/compliance.enum";
import { Environmental } from "utility/common/environmental.enum";
import { YesNo } from "utility/common/yesno.enum";

@Entity('sectionEight')
export class SectionEightEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: YesNo })
  impact: YesNo;

  @Column({ type: 'enum', enum: YesNo })
  violations: YesNo;

  @Column({ type: 'enum', enum: Environmental })
  environmental: Environmental;

  @Column({ type: 'enum', enum: Compliance })
  compliance: Compliance;

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;

  @ManyToOne(() => UserEntity, user => user.sectionEight, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  userId: number;
}
