import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/** 食材资源配置实体 */
@Entity('item_info')
export class ItemInfo {
  @PrimaryColumn({ type: 'varchar', length: 64, comment: '食材唯一ID' })
  itemKey: string;

  @Column({ type: 'varchar', length: 255, comment: '模型资源地址' })
  resPath: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
