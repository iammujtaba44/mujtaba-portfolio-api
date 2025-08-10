import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAppConfigDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsDefined()
  value: any;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @IsOptional()
  @IsString()
  description?: string;
}
