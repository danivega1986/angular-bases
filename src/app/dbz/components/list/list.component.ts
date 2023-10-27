import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/chatacter.interface';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }]

  onDeleteCharacter(index: number):void{
    this.onDelete.emit(index);
  }

  deletedCharacterById(id: string):void{
    this.onDeleteById.emit(id);
  }
}
