import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-variant-dashboard',
  templateUrl: './variant-dashboard.component.html',
  styleUrls: ['./variant-dashboard.component.scss']
})
export class VariantDashboardComponent implements OnInit {
  selectedVariant = '';
  variantList = [
    {
      variantCode: '123',
      variantDesc: 'Variant 123',
      variantName: 'Shirt',
      attributeList: [
        {
          name: 'Size',
          type: 'alphanumeric',
          list: ['S', 'M', 'L']
        },
        {
          name: 'Color',
          type: 'color',
          list: ['white', 'blue', 'green']
        }
      ]
    },
    {
      variantCode: '123',
      variantDesc: 'Variant 123',
      variantName: 'Shirt',
      attributeList: [
        {
          name: 'Size',
          type: 'alphanumeric',
          list: ['S', 'M', 'L']
        },
        {
          name: 'Color',
          type: 'color',
          list: ['white', 'blue', 'green']
        }
      ]
    }
  ]
  selectedIndex = -1;
  combinationList = [];
  attributes: any;
  constructor(private router: Router) { 
    this.attributes = [];
  }

  ngOnInit(): void {
  }
  onChanged() {
    if(this.selectedVariant == 'addNew') {
      this.addNewVariant();
    } else {
      this.selectedIndex = parseInt(this.selectedVariant);
      for (let i=0; i < this.variantList[this.selectedIndex].attributeList.length; i++){
        let temp: never[] = [];
        this.attributes.push(temp);
      }
    }
  }
  addNewVariant() {
    this.router.navigate(['new-variant']);
  }
  checkBoxChecked($event: any, value: any, variant: any) {
    if ($event.target.checked) {
      this.attributes[variant].push(value);
    } else {
      this.attributes[variant].forEach( (item: any, index: any) => {
        if(item === value) this.attributes[variant].splice(index,1);
      });
    }
    this.setCombinationList();
  }
  setCombinationList() {
    this.attributes.forEach((item: any) => {
      if(item.length < 1) {
        this.combinationList =[];
        return;
      }
    });
    // code for setting combinations goes here
  }
}
