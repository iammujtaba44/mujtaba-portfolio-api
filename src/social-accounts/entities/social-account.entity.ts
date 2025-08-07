import { Column, Entity, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class SocialAccount {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  icon: string;
}
