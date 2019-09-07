import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-responsive',
  templateUrl: './table-responsive.component.html',
  styleUrls: ['./table-responsive.component.css']
})
export class TableResponsiveComponent implements OnInit {
  elements: any = [
    {
      id: 6, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 1, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 5, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 3, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 2, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    
  ];

  
  headElements = ['ID', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading'];
  sort(){
    
  }
  constructor() { }

  ngOnInit() {
  }

}
