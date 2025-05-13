import React, {useState, useEffect} from "react";
import  {Container, Notifications} from "./styles"
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () =>{
    const [showGlow, setGlow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() =>{
        setGlow(true);
        setTimeout(() => setGlow(false), 5000);  //glow dura 5s
}, 10000); //depopis de 10s sem efeito volta
    return () => clearInterval(interval);
}, []);

    return( 
      
        <Container 
        href='https://wa.me/5517997651100' target='_blank' rel='noopener noreferrer'>
            
                
         <FaWhatsapp />
         <Notifications showGlow={showGlow}>1</Notifications>
         </Container>
        
        
    );
};

export default WhatsAppButton;