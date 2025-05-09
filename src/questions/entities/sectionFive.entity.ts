import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Measures } from "utility/common/measures.enum";
import { Ppe } from "utility/common/ppe.rnum";
import { Provides } from "utility/common/provides.enum";
import { Risk } from "utility/common/risk.enum";
import { Safety } from "utility/common/safety.enum";
import { Workplace } from "utility/common/workplace.enum";
import { YesNo } from "utility/common/yesno.enum";

@Entity('sectionFive')
export class SectionFiveEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Safety })
  safety: Safety;

  @Column({ type: 'enum', enum: Ppe })
  ppe: Ppe;

  @Column({ type: 'enum', enum: Measures })
  measures: Measures;

  @Column({ type: 'enum', enum: YesNo })
  machinery: YesNo;

  @Column({ type: 'enum', enum: Provides })
  provides: Provides;

  @Column({ type: 'enum', enum: Risk })
  risk: Risk;

  @Column({ type: 'enum', enum: Workplace })
  workplace: Workplace;

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;

  @ManyToOne(() => UserEntity, user => user.sectionFive, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  userId: number;
}
