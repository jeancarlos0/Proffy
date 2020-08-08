import React, {InputHTMLAttributes} from 'react';
import './styles.css';

//InputHTMLAttributes já é padrão do react e contém todos os atributos ddos inputs
//HTMLInputElement é uma var global já existente, sem necessidade de importação
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

//rest contém todas as propriedades que n foram definidas, no caso as props. do input
const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input;


