import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-infohead',
  templateUrl: './infohead.component.html',
  styleUrls: ['./infohead.component.css']
})
export class InfoheadComponent implements OnChanges {

  editable = false;
  @Input() editors: string[] = [];
  @Output() edit = new EventEmitter<null>();
  @Output() save = new EventEmitter<null>();
  @Output() discard = new EventEmitter<null>();
  editing = false;
  saving = false;
  error = false;

  constructor(private userService: UsersService) { }

  ngOnChanges() {
    this.userService.checkLevel(this.editors)
      .then( login => this.editable = login );
  }

  saved(success: boolean) {
    this.saving = false;
    this.editing = !success;
    this.error = !success;
  }

}
