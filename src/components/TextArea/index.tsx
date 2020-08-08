import React, {TextareaHTMLAttributes} from 'react'
import './styles.css'

//TextareaHTMLAttributes já é padrão do react e contém todos os atributos ddos Textareas
//HTMLTextareaElement é uma var global já existente, sem necessidade de importação
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

//rest contém todas as propriedades que n foram definidas, no caso as props. do Textarea
const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    )
}

export default Textarea;


