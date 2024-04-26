import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: '',
    power: 0
  }]

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeletecharacter(id: string): void {
    this.onDeleteId.emit(id);
  }
 }
