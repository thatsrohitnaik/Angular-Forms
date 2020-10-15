import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';

const routes: Routes = [
  { path: "model", component: ModelDrivenComponent },
  { path: "template", component: TemplateDrivenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
