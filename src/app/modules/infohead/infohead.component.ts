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
  @Output() delete = new EventEmitter<null>();
  @Input() editing = false;
  @Input() show_delete = false;
  saving = false;
  confirm_delete = false;
  time_left_to_delete: number;
  deleting = false;
  error = false;
  error_msg = 'Saving Failed!';

  constructor(private userService: UsersService) { }

  ngOnChanges() {
    this.userService.checkLevel(this.editors)
      .then( login => this.editable = login );
  }

  saved(success: boolean, err_msg?: string) {
    this.saving = false;
    this.editing = !success;
    this.error = !success;
    this.error_msg = err_msg || 'Saving Failed!';
  }

  check_delete() {
    if (this.confirm_delete) {
      this.confirm_delete = false;
      this.deleting = true;
      return this.delete.emit();
    }
    this.confirm_delete = true;
    this.time_left_to_delete = 3; // 3 seconds
    const countdown = setInterval(() => {
      this.time_left_to_delete--;
      if (this.time_left_to_delete <= 0 || this.editing) {
        this.confirm_delete = false;
        clearInterval(countdown);
      }
    }, 1000);
  }

  deleted(success: boolean, err_msg?: string) {
    this.deleting = false;
    this.error = !success;
    this.error_msg = err_msg || 'Deletion Failed!';
  }

}
