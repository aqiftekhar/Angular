import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatedStatus = 'No Server was created!';
  serverName : string = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    return this.serverCreatedStatus = 'A New Server Created'!
  }
  onUpdateServerName(event : any){
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }
}
