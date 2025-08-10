import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
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

  @IsEnum(ExperienceRoleType)
  @IsNotEmpty()
  roleType: ExperienceRoleType;
}
