import { Component, OnInit } from '@angular/core';
import { Show, tvlibService } from 'tvlib';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ServicesService } from 'projects/resources/src/lib/services/services.service';

import { ResourcesService } from 'projects/resources/src/lib/resources.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  show$: Observable<Show>;
  config: any;

  
  constructor(private tvlib: tvlibService, 
    private http: HttpClient,
    private translate: TranslateService,
    configService: ResourcesService,
    apiService: ServicesService,
    

    
    ) {
      this.config = configService.config;
     // console.log(this.config)
    translate.setDefaultLang('es');
    this.show$ = this.tvlib.getShow(336);

    
    //console.log(this.show$)
  }
  
  ngOnInit() {
    // this.getResources()
  }
    
}