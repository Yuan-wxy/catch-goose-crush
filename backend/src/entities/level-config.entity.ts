import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/** 关卡配置实体 */
@Entity('level_config')
export class LevelConfig {
  @PrimaryColumn({ type: 'int', comment: '关卡编号' })
  levelNo: number;

  @Column({ type: 'json', comment: '食材类型数组' })
  itemTypeList: string[];

  @Column({ type: 'int', comment: '本关食材总数' })
  itemTotal: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
