import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AppType, ProjectType } from '../entities/project.entity';
import { Type } from 'class-transformer';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  projectName: string;

  @IsEnum(ProjectType)
  @IsNotEmpty()
  projectType: ProjectType;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectLink)
  appLinks: ProjectLink[];

  @IsNumber()
  @IsNotEmpty()
  order: number;
}

class ProjectLink {
  @IsEnum(AppType)
  @IsNotEmpty()
  type: AppType;

  @IsString()
  @IsNotEmpty()
  url: string;
}
