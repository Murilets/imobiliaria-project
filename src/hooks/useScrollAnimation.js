import { useEffect, useState, useRef } from "react";
export function useScrollAnimation(){
    const [isVisible, setIsVisible] = useState(false); // estado que indica se o elemento esta visivel
    const elementRef = useRef(null);  // referencia ao elemento que queremos observar

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsVisible(true); // criando uma funcao para que se o elemento estiver visivel, muda o estado para true
                }
            },
            {threshold: 0.3} // quando o elemento estiver visivel, ativa o callback
        );   

        const currentElement = elementRef.current // Copia a referencia do elemento antes de usar no observer
        if (currentElement){
            observer.observe(currentElement); // observa o elemento
        }

        return () => {
            if (currentElement){
                observer.unobserve(currentElement); //Para de observar quando o componente for desmontado
            }
        };
    }, []);
    return {elementRef, isVisible }; //retorna a referencia e o estado para serem usados no componente
}