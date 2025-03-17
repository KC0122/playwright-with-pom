import {Page,type Locator} from '@playwright/test';

export default class homepage{

readonly page:Page;
readonly searchbox:Locator;

 constructor(page){
  this.page=page
  this.searchbox= page.locator();
 }

  async goto(){
  await this.page.goto("https://www.totaljobs.com/");
  }


}






