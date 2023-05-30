import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  developer: Developer = new Developer(
    'Lucas',
    'Corbino',
    26,
    'male',
    'I am learning at the WildCodeSchool',
    [
      { name: 'JS', logo: 'JSlogo', site: 'js.com' },
      { name: 'HTML', logo: 'HTMLlogo', site: 'HTML.com' },
      { name: 'angular', logo: 'angularlogo', site: 'angular.io' },
    ]
  );
}
