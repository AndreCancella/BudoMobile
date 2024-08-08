import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonThumbnail, IonLabel, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.page.html',
  styleUrls: ['./list-students.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonThumbnail, IonLabel, IonButton]
})
export class ListStudentsPage implements OnInit {
  public items = [
    {
      title: 'Card 1',
      content: [
        'Item 1 for card 1',
        'Item 2 for card 1',
        'Item 3 for card 1',
        'Item 4 for card 1',
        'Item 5 for card 1',
        'Item 6 for card 1'
      ]
    },
    {
      title: 'Card 2',
      content: [
        'Item 1 for card 2',
        'Item 2 for card 2',
        'Item 3 for card 2',
        'Item 4 for card 2',
        'Item 5 for card 2',
        'Item 6 for card 2'
      ]
    },
    {
      title: 'Card 3',
      content: [
        'Item 1 for card 3',
        'Item 2 for card 3',
        'Item 3 for card 3',
        'Item 4 for card 3',
        'Item 5 for card 3',
        'Item 6 for card 3'
      ]
    },
    // Adicione mais cards conforme necessário
  ];

  constructor() { }

  ngOnInit() {
  }

}
