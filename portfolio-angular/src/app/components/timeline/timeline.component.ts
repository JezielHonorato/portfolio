import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})

export class TimelineComponent {
  timelineItems = [
    {
      title: 'IFRN',
      description: 'Comecei meu ensino médio e técnico em informática integrado',
      date: '2021',
    },
        {
      title: 'IFRN',
      description: 'Conclusão do ensino médio e técnico em informática integrado ',
      date: '2024',
    },
  ];
}
