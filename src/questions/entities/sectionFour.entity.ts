import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Industrial } from "utility/common/industrial.enum";
import { Recognize } from "utility/common/recognize.enum";
import { Trade } from "utility/common/trade.enum";
import { Action } from "utility/common/action.enum";

@Entity('sectionFour')
export class SectionFourEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Trade })
  trade: Trade;

  @Column({ type: 'enum', enum: Recognize })
  recognize: Recognize;

  @Column({ type: 'enum', enum: Industrial })
  industrial: Industrial;
  
  @Column({ type: 'enum', enum: Action })
  action: Action;

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;

  @ManyToOne(() => UserEntity, user => user.sectionFour, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  userId: number;
}
