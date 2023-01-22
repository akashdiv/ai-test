import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OutterdashboardComponent } from './pages/outterdashboard/outterdashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { ChatComponent } from './pages/chat/chat.component';
import { UserComponent } from './pages/user/user.component';
import { TrainBotComponent } from './pages/dashboard/train-bot/train-bot.component';
import { IntentsComponent } from './pages/dashboard/intents/intents.component';
import { CatchAllComponent } from './pages/dashboard/catch-all/catch-all.component';
import { AnalyticsComponent } from './pages/dashboard/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SidebarComponent,
    DashboardComponent,
    OutterdashboardComponent,
    HeaderComponent,
    ChatComponent,
    UserComponent,
    TrainBotComponent,
    IntentsComponent,
    CatchAllComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
