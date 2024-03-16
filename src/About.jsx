import TacoBanner from "./assets/TacoStandBanner.jpg";
import "./about.css";

function About() {
    return(
        <div className="about">
            <h1>About Us</h1>
            <img src={TacoBanner}></img>
            <div className="aboutBottom">
                <h2>The Taco Stand: Where Tradition Meets Flavor</h2>
                <p>
                    Welcome to The Taco Stand, a lively corner of Mexico right here in Kansas. 
                    Our passion lies in serving time-honored Mexican street food with a dash of contemporary flair. 
                    Every dish is a labor of love, crafted from scratch using the freshest ingredients.<br></br>
                </p>
                <p><strong>What Sets Us Apart:</strong></p>
                    <ul>
                        <li><strong>Flavorful Creations:</strong> Our menu dances with the bold and the unexpected. From sizzling tacos to hearty burritos, each bite is an explosion of taste.</li>
                        <li><strong>Handcrafted Sips:</strong> Quench your thirst with our <em>zesty citrus aguas frescas</em>, sweetened just right with organic Agave nectar.</li>
                    </ul>
                <p>
                    Whether you are a seasoned food adventurer or a curious newcomer, we invite you to join us. Come experience the flavors that define our beloved cuisine.
                </p>
            </div>
        </div>
    );
}

export default About;