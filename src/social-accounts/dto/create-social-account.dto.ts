import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSocialAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon: string;
}
