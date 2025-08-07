import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class SocialAccount {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  icon: string;
}
