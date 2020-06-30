import {Component, OnInit} from '@angular/core';
import {TacheService} from './tache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public taches;
public alllist;

  selectedValue = -1;

  constructor(private tacheService:TacheService) {
  }
  ngOnInit(): void {
    this.getTaches()
  }

  private getTaches() {

    this.tacheService.getResource("/TacheList").subscribe(data=>{
      this.taches=this.alllist=data;

    },error => {
      console.log(error);
    })

  }
  private getTachesByClient(Client) {
    this.tacheService.getResource("/GetByClient/"+Client).subscribe(data=>{
      this.taches=data;
    },error => {
      console.log(error);
    })

  }
  private getTachesByProject(projet) {
    this.tacheService.getResource("/GetByProject/"+projet).subscribe(data=>{
      this.taches=data;

    },error => {
      console.log(error);
    })

  }
  private getTachesByActivity(activite) {
    this.tacheService.getResource("/GetByActivite/"+activite).subscribe(data=>{
      this.taches=data;
    },error => {
      console.log(error);
    })

  }


}
