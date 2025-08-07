import { ObjectId } from 'mongodb';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ObjectIdColumn,
} from 'typeorm';
import { StringRegexUtils } from '../../utils/string-regex.utils';

@Entity()
export class Projects {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  companyName: string;

  @Column()
  projectName: string;

  @Column()
  projectType: ProjectType;

  @Column()
  projectTypeDisplayName: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  appLinks: ProjectLink[];

  @Column({ default: false })
  render: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  generateType() {
    if (this.projectType) {
      this.projectTypeDisplayName = StringRegexUtils.toDisplayName(
        this.projectType,
      );
    }
  }
}

class ProjectLink {
  @Column()
  type: AppType;

  @Column()
  url: string;
}

export enum ProjectType {
  PRODUCT = 'product',
  OPEN_SOURCE = 'open_source',
  OTHER = 'other',
}

export enum AppType {
  WEB_APP = 'web_app',
  MOBILE_APP_PLAY = 'mobile_app_play_store',
  MOBILE_APP_APP_STORE = 'mobile_app_app_store',
  DESKTOP_APP = 'desktop_app',
  GITHUB = 'github',
  API = 'api',
  OTHER = 'other',
}
