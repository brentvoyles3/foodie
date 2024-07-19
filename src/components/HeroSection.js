import CustomImage from "./CustomImage"
export default function HeroSection() {
    const images = [
        "./img/gallery/img_1.jpg"
    ]
return(
    <div className="section hero">
        <div className="col">
            <h1 className="title">What are we about?</h1>
            <p> FoodieHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. Start exploring now.</p>
            <button className="btn"> Explore now </button>
            </div>
            <div className="col gallery">
           <CustomImage pt={"85%"} />
           <CustomImage pt={"85%"} />
           <CustomImage pt={"85%"} />
           <CustomImage pt={"85%"} />
           <CustomImage pt={"85%"} />
           <CustomImage pt={"85%"} />
           <CustomImage pt={"85%"} />
           <CustomImage pt={"85%"} />
           <CustomImage pt={"85%"} />

            </div>
    </div>
)
} //HeroSection