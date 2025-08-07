import { PartialType } from '@nestjs/mapped-types';
import { CreateStacksDto } from './create-stacks.dto';

export class UpdateStacksDto extends PartialType(CreateStacksDto) {}
