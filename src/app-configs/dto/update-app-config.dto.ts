import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateAppConfigDto } from './create-app-config.dto';

export class UpdateAppConfigDto extends PartialType(
  OmitType(CreateAppConfigDto, ['key'] as const),
) {}
