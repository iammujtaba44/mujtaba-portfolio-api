import { ObjectId } from 'mongodb';
import { StringRegexUtils } from 'src/utils';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class Experiences {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  companyName: string;

  @Column()
  country: string;

  @Column()
  duration: string;

  @Column()
  position: string;

  @Column()
  description: string[];

  @Column()
  technologies: string[];

  @Column()
  roleType: ExperienceRoleType;

  @Column()
  roleTypeDisplayName: string;

  @BeforeInsert()
  @BeforeUpdate()
  generateRoleTypeDisplayName() {
    if (this.roleType) {
      this.roleTypeDisplayName = StringRegexUtils.toDisplayName(this.roleType);
    }
  }
}

export enum ExperienceRoleType {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
  FREELANCE = 'freelance',
  INTERNSHIP = 'internship',
}
