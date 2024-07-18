import CustomImage from "./CustomImage"
export default function HeroSection() {
return(
    <div className="section">
        <div className="col">
            <h1 className="title">What are we about?</h1>
            <p> FoodieHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. Start exploring now.</p>
            <button className="btn"> Explore now </button>
            </div>
            <div className="col gallery">
           <CustomImage/>
            </div>
    </div>
)
} //HeroSection