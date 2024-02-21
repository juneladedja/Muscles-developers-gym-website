import Heroimg from './assets/Herospace.jpg'


export function Herosection(params) {

    const Herostyle = {
        width : '100%',
        height : '40%'

    }

    return(
        
            <img style={Herostyle} src={Heroimg} alt=""/> 
    )
    
}