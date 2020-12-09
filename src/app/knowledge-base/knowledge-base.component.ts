import {Component, OnInit} from '@angular/core';
import {PrologService} from '../prolog/prolog.service';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {
  knowledgeBase = '';

  constructor(
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
    this.knowledgeBase = this.prologService.knowledgeBase;
  }

}
