import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/a-/AOh14GjymMXhQWUu6-x81AFqH9zWXm_DZ1jPyPqBbFQA=s96-c-rg-br100" alt="Avatar do usuário"/>
                <div>
                    <strong>Jean Carlos</strong>
                    <span>Estrutura de Dados</span>
                </div>
            </header>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> <br/> Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.</p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 55,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Icone do Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;