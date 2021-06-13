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
          list: ['white', 'blue', 'green', 'yellow', 'orange']
        },
        {
          name: 'Waist',
          type: 'number',
          list: ['32', '34', '36', '38']
        },
        {
          name: 'Bust',
          type: 'number',
          list: ['32', '34', '36', '38']
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
  combinationList: String[][] = [];
  attributes: any;
  constructor(private router: Router) {
    this.attributes = [];
  }

  ngOnInit(): void {
  }
  onChanged() {
    if (this.selectedVariant == 'addNew') {
      this.addNewVariant();
    } else {
      this.selectedIndex = parseInt(this.selectedVariant);
      for (let i = 0; i < this.variantList[this.selectedIndex].attributeList.length; i++) {
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
      this.attributes[variant].forEach((item: any, index: any) => {
        if (item === value) this.attributes[variant].splice(index, 1);
      });
    }
    this.setCombinationList();
  }
  setCombinationList() {
    let isCombinable = true;
    this.attributes.forEach((item: any) => {
      if (item.length < 1) {
        this.combinationList = [];
        isCombinable = false;
      }
    });
    
    // code for setting combinations goes here
    if(isCombinable) this.setComb(this.attributes)
    
  }
  // Function to print combinations that contain
  // one element from each of the given arrays
  setComb(arr: any) {

    // Number of arrays
    let n = arr.length;
    let count = 0;
    this.combinationList = [];

    // To keep track of next element in
    // each of the n arrays
    let indices = new Array(n);

    // Initialize with first element's index
    for (let i = 0; i < n; i++)
      indices[i] = 0;

    while (true) {
      
      count++;
      this.combinationList[count-1] = [];
      // Push current combination to list
      for (let i = 0; i < n; i++){
        this.combinationList[count-1].push(arr[i][indices[i]] + " ");
      }
      
      // Find the rightmost array that has more elements left after the current element in that array
      let next = n - 1;
      while (next >= 0 && (indices[next] + 1 >= arr[next].length))
        next--;

      // No such array is found so no more combinations left
      if (next < 0)
        return;

      // If found move to next element in that array
      indices[next]++;

      // For all arrays to the right of this array current index again points to first element
      for (let i = next + 1; i < n; i++)
        indices[i] = 0;
    }
  }
}
