import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Language } from '../../models/language.enem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  selectedLanguage: string = '';
  languages: string[] = [
    Language.JavaScript,
    Language.Python,
    Language.Java,
    Language.TypeScript,
    Language.HTML,
    Language.CSS,
  ];

  repos: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((data) => {
      this.repos = data.filter((repo: any) => repo.name !== 'JezielHonorato');
    });
  }

  getLanguageIcon(language: string): string {
    const languageIcons: { [key in Language]: string } = {
      [Language.JavaScript]: 'fab fa-js',
      [Language.Python]: 'fab fa-python',
      [Language.Java]: 'fab fa-java',
      [Language.TypeScript]: 'fab fa-ts',
      [Language.HTML]: 'fab fa-html5',
      [Language.CSS]: 'fab fa-css3-alt',
      [Language.Ruby]: 'fab fa-ruby',
      [Language.Go]: 'fab fa-go',
    };

    return languageIcons[language as Language] || 'fas fa-code';
  }
}
