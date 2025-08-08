import { ObjectId } from 'mongodb';
import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';

@Entity()
@Index(['key'], { unique: true })
export class AppConfig {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  key: string;

  @Column()
  value: any;

  @Column({ default: false })
  isPublic: boolean;

  @Column({ nullable: true })
  description?: string;
}
