import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'bigint', unsigned: true})
  id!: number;
  @Column({unsigned: true})
  post_author!: number
  @Column({default: '0000-00-00 00:00:00'})
  post_date!: Date
  @Column({default: '0000-00-00 00:00:00'})
  post_date_gmt!: Date
  @Column({type: 'longtext'})
  post_content!: string
  @Column({type: 'text'})
  post_title!: string
  @Column({type: 'text'})
  post_excerpt!: string
  @Column({type: 'varchar', length: 20})
  post_status!: string
  @Column({type: 'varchar', length: 255, select: false})
  post_password!: string
  @Column({type: 'varchar', length: 200})
  post_name!: string
  @Column({type: 'text'})
  to_ping!: string
  @Column({type: 'text'})
  pinged!: string
  @Column({default: '0000-00-00 00:00:00'})
  post_modified!: Date
  @Column({default: '0000-00-00 00:00:00'})
  post_modified_gmt!: Date
  @Column({type: 'longtext'})
  post_content_filtered!: string
  @Column({type: 'bigint', unsigned: true})
  post_parent!: number
  @Column({type: 'varchar', length: 255})
  guid!: string
  @Column({type: 'int'})
  menu_order!: number
  @Column({type: 'varchar', length: 20})
  post_type!: string
  @Column({type: 'varchar', length: 100})
  post_mime_type!: string
  @Column({type: 'bigint'})
  comment_count!: number
}
