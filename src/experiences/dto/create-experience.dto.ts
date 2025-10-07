import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ExperienceRoleType } from '../entities/experience.entity';

export class CreateExperienceDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsArray()
  @IsNotEmpty()
  description: string[];

  @IsArray()
  @IsNotEmpty()
  technologies: string[];

  @IsNumber()
  @IsNotEmpty()
  order: number;

  @IsEnum(ExperienceRoleType)
  @IsNotEmpty()
  roleType: ExperienceRoleType;
}
