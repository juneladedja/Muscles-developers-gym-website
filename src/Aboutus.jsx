import aboutus1 from "./assets/aboutus1.jpg"
import "./aboutus.css"
import world from "./assets/world.png"
import team from "./assets/team.jpeg"
import spaceshuttle from "./assets/spaceshuttle.png"
import engine from "./assets/engine.png"
import aboutus from "./assets/aboutus.jpg"
import Nasalogo from "./assets/Nasalogo.png";
import Spacexlogo from "./assets/Spacexlogo.png";


export function Aboutus(){

    return(
        <>
        <div className="contenitore-tutto">

            <div>
            <div className="titolo-aboutus">
                    <h2> OUR MISSION <br />
                    AND VISION </h2>
            </div>

            <div className="contenitore-img">
                <img className="astronauta-aboutus" src={aboutus} alt="astronauta aboutus" />
            </div>
            </div>

            <div className="contenitore-story-nebula"> 
                <h3> OUR STORY </h3>
                <p> Nebula Travel Agency was founded in 1970 by a group 
                    of passionate astronauts whose vision was to unveil 
                    the mysteries of the universe to the inhabitants of Earth. 
                    Driven by their love for space exploration and a desire to 
                    share the wonders of the cosmos with others, they embarked 
                    on a mission to make space travel accessible and achievable for all. 
                    With their combined expertise and dedication, they laid the foundation 
                    for an agency that would inspire generations to come, opening doors to 
                    the infinite possibilities of space exploration. From its inception, 
                    Nebula has been committed to igniting a sense of wonder and curiosity about 
                    the universe, offering unforgettable experiences that transcend the boundaries 
                    of our planet.
                </p>
            </div>

            <h3 className="whoweare"> WHO WE ARE </h3>

            <div className="community-title">
                <p> We are a group of passionate astronauts and space enthusiasts, 
                    united by the desire to explore the unknown and live extraordinary 
                    adventures beyond Earth's borders. Our mission is to organize space 
                    travel, offering unique and unforgettable experiences for those who 
                    share our passion for astronomy and cosmic discovery. 
                    Together, we are committed to making the exciting frontier of 
                    space accessible, creating meaningful connections among astronomy 
                    lovers, and opening new horizons of knowledge and adventure. 
                    Get ready to sail among the stars with us and experience an 
                    extraordinary space journey!
                </p>
                <img src={team} alt="team-astronauti" />
            </div>

            <h3 className="spaceshuttle-title"> OUR SPACE SHUTTLE </h3>

            <div className="contenitore-spacushuttle">
                <img className="spaceshuttle" src={spaceshuttle} alt="space-shuttle" />
                <p> Designed to reach unprecedented speeds and traverse vast distances, 
                    this spacecraft represents a significant leap forward in space travel 
                    capabilities. With its sleek design and innovative propulsion systems, 
                    it offers unparalleled efficiency and performance, ensuring smooth and 
                    swift journeys through the cosmos. One of the key features of our new 
                    spacecraft is its use of advanced materials engineered to withstand the 
                    rigors of space travel. From heat-resistant alloys to lightweight composites, 
                    every component is meticulously crafted to endure the harsh conditions of the 
                    space environment, providing unparalleled safety and reliability for our passengers. 
                    But our spacecraft 
                    is not just about functionality: it's also about comfort and convenience. 
                    With spacious interiors, ergonomic seating, and state-of-the-art amenities, 
                    passengers can relax and enjoy the journey while our expert crew guides them through 
                    the wonders of the universe. 
                </p>
            </div>

            <div className="contenitore-motore">
                <p> Nebula is proud to unveil its latest spacecraft, 
                    a cutting-edge marvel of engineering that represents 
                    the pinnacle of space exploration technology.  
                    At the heart of our spacecraft lies an advanced propulsion 
                    system that sets it apart from conventional spacecraft. 
                    Utilizing next-generation engines powered by renewable energy 
                    sources, our spacecraft boasts exceptional fuel efficiency and 
                    minimal CO2 emissions. This groundbreaking technology not only 
                    reduces our environmental footprint but also enables us to embark 
                    on longer and more ambitious space missions with confidence.
                    The propulsion system of our spacecraft operates on the principles 
                    of clean energy conversion and thrust generation. 
                </p>
                <img className="engine" src={engine} alt="motore navicella" />
            </div>

            <div className="titolo-global-map">
                <h3> OUR GLOBAL DEPARTURES </h3>
            </div>

            <div class="contenitore-tabella">
             <div class="riga-tabella">
             <div class="cella-tabella"> 2950+ <br/> <span className="span-tabella"> ORGANIZED TRIPS </span></div>
             <div class="cella-tabella"> 10M <br /> <span className="span-tabella"> ANNI LUCE PERCORSI  </span></div>
             <div class="cella-tabella">500+ <br /> <span className="span-tabella"> GALAXIES REACHED </span></div>
             <div class="cella-tabella1"> 12 YEARS <br /> <span className="span-tabella"> OF EXPERIENCE </span></div>
            </div>

            <div className="mappamondo">
                <img src={world} alt="mappa mondo" />
            </div>

            <h3 className="title-collaborators"> OUR SPONSORS </h3>
            <div className="contenitore-sponsor">
            <img className="Nasalogo" src={Nasalogo}></img>
            <img className="Spacexlogo" src={Spacexlogo}></img>
            </div>
</div>

        </div>
        </>
    )
}