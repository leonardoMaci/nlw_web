import React from 'react';
import './styles.css';
import Whatsapp from '../../assets/images/icons/whatsapp.svg'


function TeacherItem(){
 return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/37885110?s=460&u=28a4a1f87eb0b85814065a8438fcfeda13870abb&v=4" alt=""/>
            <div>
                <strong>Leonardo Maciel</strong>
                <span>Matematica</span>
            </div>
        </header>
        <p>
            asdasdasda dsadsasdas asdsdaasdsadasd asdasdadsadsasdasdasdsdaasd sadasdasd asdadsadsas dasdasdsd aasdsad
            <br/>
            <br/>
            asdasdasda dsadsasdas asdsdaasdsadasd asdasdadsadsasdasdasdsdaasd sadasdasd asdadsadsas dasdasdsd aasdsad asdasdasda dsadsasdas asdsdaasdsadasd asdasdadsadsasdasdasdsdaasd sadasdasd asdadsadsas dasdasdsd aasdsad
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={Whatsapp} alt=""/>
                Entrar em contato
            </button>                        
        </footer>
    </article>    
 )
}

export default TeacherItem;