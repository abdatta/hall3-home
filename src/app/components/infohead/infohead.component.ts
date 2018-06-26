import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-infohead',
  templateUrl: './infohead.component.html',
  styleUrls: ['./infohead.component.css']
})
export class InfoheadComponent implements OnInit {

  editable = false;
  @Output() edit = new EventEmitter<null>();
  @Output() save = new EventEmitter<null>();
  @Output() discard = new EventEmitter<null>();
  editing = false;
  saving = false;
  error = false;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.check()
      .then( login => this.editable = login );
  }

  saved(success: boolean) {
    this.saving = false;
    this.editing = !success;
    this.error = !success;
  }

}
