// "use client";
// import Button from "@/components/mybutton";

import CoinRates from "@/components/coin";

// import { useState } from "react";

// export default function Home() {
//   const[value,setValue]=useState<number|null>(null);

// function handle1(){
//     setValue(100);
// }
// function handle2(){
//     setValue(200);
// }
// function handle3(){
//     setValue(300);
// }

//   return (
//     <>
//     <Button text="show" color="red" font="lg" func={handle1}/>
//     <Button text="Call" color="black" font="2xl" func={handle2}/>
//     <Button text="Check" color="black" font="md" func={handle3}/>
//   </>
//   );



const Home = ()=>{
return(
 <>
 <CoinRates/>
 </>
);
}

export default Home;