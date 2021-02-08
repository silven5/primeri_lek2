import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
myDate:Date;
isBossHappy:boolean=true;
user:any[];


  constructor() {}
  getBonus(isBossHappy){
  return new Promise((resolve,reject)=>
    {
      if (isBossHappy)
      {
       var bonus={size:"big",price:2000};
        resolve(bonus);
      }
      else
      {
        var reason=new Error("Boss is not happy");
        reject(reason);
      }
    }
  )
  }
  getBonusTeam= ((bonus)=>
  {
    let message:string;
    message="I have bonus size="+bonus.size+" price="+bonus.price+"$";
    return Promise.resolve(message);
  }
  )
sync()
{
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date
  }

  console.log(myDate);
this.myDate=myDate;
}
async1()
{
  console.log("Hello");
  setTimeout(function(){console.log("world!!!")},2000);
  console.log("I am!!!");
}
async_promise()
{
  this.getBonus(this.isBossHappy)
  .then(function (fulfilled) {
    console.log(fulfilled);
 })
.catch(function (error) {
        console.log(error.message);
 });
}
async_promise_team()
{
  console.log("Boss is not Happy!!!");
  this.getBonus(this.isBossHappy)
  .then(this.getBonusTeam)
  .then((fulfilled)=>{console.log(fulfilled);})
  .catch((error)=>{console.log(error.message);})
  console.log("Boss is Happy!!!");
  console.log("Boss is not Happy!!!");
  console.log("Boss is Happy!!!");
}
async async_await_promise_team()
{
  try{
  console.log("Boss is not Happy!!!");
  let bonus=await this.getBonus(this.isBossHappy);
  let message=await this.getBonusTeam(bonus);
  console.log(message);
  console.log("Boss is Happy!!!");
}
catch (error) {
  console.log(error.message);
}
}
getMinMaxMoney()
{
  let max=0;
  let min=100;
  this.user.forEach((element)=>{
    if (element["money"]>max){max=element["money"];}
    if (element["money"]<min){min=element["money"];}
  }
 )

  return [max, min];
}
async user_ras()
{
  let response = await fetch('https://api.jsonbin.io/b/60102b313126bb747e9f487f',
  {headers:{"secret-key":"$2b$10$Yadqz71B/V1k11rlWw/IoucxY9DxBu/5xBD4hE6/NO66G6ziXMiU."}}
  );
  this.user = await response.json();
  console.log(this.user);
  let rezult=this.getMinMaxMoney();
  console.log(rezult[0]);
  console.log(rezult[1]);
}
}
