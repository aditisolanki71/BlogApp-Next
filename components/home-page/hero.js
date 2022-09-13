import Image from "next/image";
import classes from "./hero.module.css"
function Hero() {
   return (
      <section className={classes.hero}>
         <div className={classes.image}>
            <Image 
               src="/images/site/aditi.jpg" 
               alt="Image of Aditi" 
               width={300} 
               height={300}
            />
         </div>
         <h1>Hello, Aditi here</h1>
         <p>Blog about Development</p>
      </section>
    )
 }
 export default Hero;