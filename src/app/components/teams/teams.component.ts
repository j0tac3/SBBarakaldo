import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  public teams = [
    {
      'name' : 'Athletic Club de Bilbao',
      'main_image' : 'athletic_club\\athletic_club_front.png',
      'front_image' : 'athletic_club\\athletic_club_front.png',
      'back_image' : 'athletic_club\\athletic_club_back.png',
      'desc' : 'Athletic club de Bilbao 1983/1984 , camiseta local.',
      'active' : true
    },
    {
      'name' : 'Real Madrid',
      'main_image' : 'real_madrid\\real_madrid_front.png',
      'front_image' : 'real_madrid\\real_madrid_front.png',
      'back_image' : 'real_madrid\\real_madrid_back.png',
      'desc' : 'The 1997-981 UEFA Champions League final was played on May 20, 1998 at the Amsterdam Arena in Amsterdam, the Netherlands. It was the 43rd edition of the final of the competition and the teams that played it were Real Madrid and Juventus with a 1-0 result for the madridistas, 2 who achieved their long-awaited "Seventh" European Cup, after 32 years without obtaining the title',
      'active' : false
    },
    {
      'name' : 'Atletico de Madrid',
      'main_image' : 'atletico_madrid\\atletico_madrid_front.png',
      'front_image' : 'atletico_madrid\\atletico_madrid_front.png',
      'back_image' : 'atletico_madrid\\atletico_madrid_back.png',
      'desc' : 'Atlético Madrid 2018/2019',
      'active' : false
    },
    {
      'name' : 'Tottenhan',
      'main_image' : 'tottenhan\\tottenhan_front.png',
      'front_image' : 'tottenhan\\tottenhan_front.png',
      'back_image' : 'tottenhan\\tottenhan_back.png',
      'desc' : 'This season, he was able to reach the Champions League final, in which he fell against Liverpool.',
      'active' : false
    },
    {
      'name' : 'Francia 1998',
      'main_image' : 'france\\france_front.png',
      'front_image' : 'france\\france_front.png',
      'back_image' : 'france\\france_back.png',
      'desc' : 'Equipo de Francia ganadora del mundial de 1998.',
      'active' : false
    },
    {
      'name' : 'Argentina',
      'main_image' : 'argentina\\argentina_front.png',
      'front_image' : 'argentina\\argentina_front.png',
      'back_image' : 'argentina\\argentina_back.png',
      'desc' : 'Argentina\'s national team, which won the world cup for the first time. In terms of awards, striker Mario Alberto Kempes won the award for the top scorer and best player of the tournament, just as Ubaldo Fillol won the award for the best goalkeeper of the tournament. In addition, Argentina won the Fair Play award.',
      'active' : false
    }
  ];
  public currentTeam : any;
  public index : number = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentTeam = this.teams[0];
  }

  changeMainImage( team : any, path : string ){
    if (team.main_image !== path )
      team.main_image = path;
  }

  toBeforeImage(){
    if (this.index > 0)
      this.index -= 1;
    this.currentTeam = this.teams[this.index];
  }

  toAfterImage(){
    if (this.index < this.teams.length - 1)
      this.index += 1;
    this.currentTeam = this.teams[this.index];
  }

  optionChanged( option : any ){
    this.index = option.target.value;
    this.currentTeam = this.teams[this.index];
  }
}
