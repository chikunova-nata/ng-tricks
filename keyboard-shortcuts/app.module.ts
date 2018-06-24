import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComposeMessageComponent implements OnInit {

  @Input() composeMessage: boolean;

  constructor() { }

  ngOnInit() {
  }

}