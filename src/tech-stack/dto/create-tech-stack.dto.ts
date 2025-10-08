import {
  IsString,
  IsArray,
  IsNotEmpty,
  ValidateNested,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateStacksDto } from './create-stacks.dto';

export class CreateTechStackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  order: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateStacksDto)
  stacks: CreateStacksDto[];
}
