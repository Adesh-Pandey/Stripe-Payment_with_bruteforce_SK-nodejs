import Stripe from "stripe";
const stripe = Stripe('Your_SK_KEY');
import fs from "fs";
let data=`5333171063710046|4|23|444
5332480189481130|10|24|359
6507242644688296|12|24|785
5536814302235722|10|24|223
5275050007546874|12|24|365
5332480258116575|10|23|273
5333171045008980|6|22|159
5817471028654098|3|23|638
5332480041145089|01|25|050
5332480336784451|08|25|272
4430400028414658|10|22|652
378750427171586|12|25|4018
5332480170400602|10|22|404
5332480032758296|8|26|401
5513840008466540|12|23|420
5332480182981953|10|25|525
5333171038533739|9|22|439
6011499460177395|2|24|973
5424180564222542|6|23|608
5332480461261481|4|26|257
4610460228914131|11|25|808
5594270097439954|01|24|041
5115634684529214|06|26|039
4940005088761154|07|27|902
5218701704551969|05|24|964
5151422412218796|06|23|347
5131621737682256|04|24|958
5292740008684950|04|24|442`

let each=data.split("\n");
let num=0,mm=0,y=0,cvvALL=0;
// console.log(each)
let cards=[];

for (let i=0;i<each.length;i++) {
  let all=each[i].split("|");
  num=Number(all[0]);
  mm=Number(all[1]);
  y=Number(all[2]);
  cvvALL=Number(all[3]);

  cards[i]={"ccnum":num,"month":mm,"year":y,"cvvnum":cvvALL}
  
};
// console.log(cards[0]["ccnum"])

let TokenOfCards=[];

for (let index = 0; index < cards.length; index++) {
  let token = await stripe.tokens.create({
    card: {
      number: cards[index]["ccnum"],
      exp_month: cards[index]["month"],
      exp_year: (2000+cards[index]["y"]),
      cvc: cards[index]["cvvnum"],
    },
  });
  TokenOfCards[i]=token;
}
// const token = await stripe.tokens.create({
//   card: {
//     number: '5332480182981953',
//     exp_month: 10,
//     exp_year: 2025,
//     cvc: '525',
//   },
// });

// stripe.charges.create({
//   amount: 2000,
//   currency: "usd",
//   source: token.id, // obtained with Stripe.js
// }).then((res)=>{
  
//     console.log("success",res.status)
// }
// );
