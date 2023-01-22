import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { AnalyticsComponent } from './pages/dashboard/analytics/analytics.component';
import { CatchAllComponent } from './pages/dashboard/catch-all/catch-all.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IntentsComponent } from './pages/dashboard/intents/intents.component';
import { TrainBotComponent } from './pages/dashboard/train-bot/train-bot.component';
import { UserComponent } from './pages/user/user.component';
import { ShellComponent } from './shared/shell/shell.component';

const routes: Routes = [
  {path:'', component:ShellComponent, children:[
    {path: '', component:DashboardComponent, children:[
      {path:'train_bot', component: TrainBotComponent},
      {path:'intents', component: IntentsComponent},
      {path:'catch_all', component: CatchAllComponent},
      {path:'analytics', component: AnalyticsComponent},
      {path: '',   redirectTo: '/train_bot', pathMatch: 'full' }
    ]},
    {path: 'chat', component:ChatComponent},
    {path: 'user', component:UserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
