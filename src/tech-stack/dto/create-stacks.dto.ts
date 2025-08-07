import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateStacksDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsNumber()
  @Min(0)
  @Max(1)
  proficiency: number;
}
