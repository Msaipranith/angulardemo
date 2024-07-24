import { Component, Inject, inject } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
 op;

constructor ( @Inject(LoggerService) private logger: LoggerService){
   this.op=this.logger.addSum('pranith','sai');

};




}
