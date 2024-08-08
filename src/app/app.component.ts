import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, peopleSharp, homeSharp, createSharp, listCircleSharp } from 'ionicons/icons';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Dojo', url: '/folder/dojo', icon: 'home' },
    { title: 'Alunos', url: '/folder/students', icon: 'people' },
    { title: 'Faixa', url: '/folder/belts', icon: 'create' },
    { title: 'Lista de Alunos', url: '/pages/list-students', icon: 'list-circle' },
    { title: 'Lista de Faixas', url: '/folder/belts', icon: 'list-circle' },
  ];

  public isMenuVisible: boolean = true; // Adicione esta linha

  constructor(private router: Router) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, peopleSharp, homeSharp, createSharp, listCircleSharp });
        // Monitorar mudanças de rota para mostrar/ocultar o menu
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
          const currentUrl = this.router.url;
          this.isMenuVisible = !currentUrl.startsWith('/login');
        });
  }
}
