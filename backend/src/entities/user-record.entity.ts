import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/** 玩家存档实体 */
@Entity('user_record')
export class UserRecord {
  @PrimaryColumn({ type: 'varchar', length: 64, comment: '微信唯一标识' })
  openid: string;

  @Column({ type: 'int', default: 0, comment: '已通关最高关卡' })
  maxLevel: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
