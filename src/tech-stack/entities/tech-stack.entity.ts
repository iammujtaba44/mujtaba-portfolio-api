import {
  Entity,
  ObjectIdColumn,
  Column,
  ObjectId,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { StringRegexUtils } from '../../utils';

@Entity()
export class TechStack {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  stacks: Stacks[];

  @BeforeInsert()
  @BeforeUpdate()
  generateType() {
    if (this.name) {
      this.type = StringRegexUtils.toKebabCase(this.name);
    }
  }
}

@Entity()
export class Stacks {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  icon: string;

  @Column()
  proficiency: number;

  @BeforeInsert()
  @BeforeUpdate()
  generateType() {
    if (this.name) {
      this.type = StringRegexUtils.toKebabCase(this.name);
    }
  }
}
