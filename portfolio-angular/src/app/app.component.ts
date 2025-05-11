import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TimelineComponent } from './components/timeline/timeline.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, ProjectsComponent, TimelineComponent],
  template: `
    <app-home></app-home>
    <app-projects></app-projects>
     <app-timeline></app-timeline>
  `,
})
export class AppComponent {}
