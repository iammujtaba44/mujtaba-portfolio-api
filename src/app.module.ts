import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { SocialAccountsModule } from './social-accounts/social-accounts.module';
import { TechStackModule } from './tech-stack/tech-stack.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { AppConfigsModule } from './app-configs/app-configs.module';

@Module({
  imports: [ProjectsModule, SocialAccountsModule, TechStackModule, ExperiencesModule, AppConfigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
