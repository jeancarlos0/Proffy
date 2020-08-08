import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './styles.css'



function TeacherForm(){

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");

    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");
    //Como useState não retorna apenas os itens, é preciso desestruturar a variavel
    //A segunda opção é uma função que permite sobrescrever os itens do estado
    const [scheduleItems, setScheduleItems] = useState (
        [
            {week_day: 0, from: "", to: ""},
        ]
    );

    const history = useHistory();

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            
            {
                week_day: 0, 
                from: "", 
                to: ""
            }
        ]);
    }
    //field referencia o nome do campo
    function setScheduleItemValue(pos: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
          if (index === pos) {
            //o colchete faz com que o nome da propriedade seja o nome da variavel dentro dde field
            return { ...scheduleItem, [field]: value };
          }
    
          return scheduleItem;
        });
    
        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        //previne o comportamento padrão do form
        e.preventDefault();
    
        api.post("classes", {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
          })
          .then(() => {
            alert("Cadastro realizado com sucesso!");
    
            history.push("/");
          })
          .catch(() => {
            alert("Erro no cadastro");
          });
      }
    
    return(
        <div id="teacher-form-page" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas"
                description ="O primeiro passo, é preencher esse formulário de inscrição"
            />

        <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
                <legend>Seus dados</legend>
                <Input
                    name="name"
                    label="Nome completo"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <Input
                    name="avatar"
                    label="Avatar"
                    type="url"
                    value={avatar}
                    onChange={(e) => {
                        setAvatar(e.target.value);
                    }}
                />
                <Input
                    name="whatsapp"
                    label="Whatsapp"
                    value={whatsapp}
                    onChange={(e) => {
                        setWhatsapp(e.target.value);
                    }}
                />
                <Textarea
                    name="bio"
                    label="Biografia"
                    value={bio}
                    onChange={(e) => {
                        setBio(e.target.value);
                    }}
                />
            </fieldset>
            <fieldset>
                <legend>Sobre a aula</legend>
                <Select
                    name="subject"
                    label="Matéria"
                    value={subject}
                    onChange={(e) => {
                        setSubject(e.target.value);
                    }}
                    options={[
                        { value: "Artes", label: "Artes" },
                        { value: "Biologia", label: "Biologia" },
                        { value: "Química", label: "Química" },
                        { value: "Física", label: "Física" },
                        { value: "Geografia", label: "Geografia" },
                        { value: "História", label: "História" },
                        { value: "Matemática", label: "Matemática" },
                        { value: "Português", label: "Português" },
                        { value: "Redação", label: "Redação" },
                        { value: "Sociologia", label: "Sociologia" },
                        { value: "Filosofia", label: "Filosofia" },
                    ]}
                />

                <Input
                    name="cost"
                    label="Custo da sua hora por aula"
                    value={cost}
                    onChange={(e) => {
                        setCost(e.target.value);
                    }}
                />
                
            </fieldset>

            <fieldset>
                <legend>
                    Horarios disponíveis
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo horario
                    </button>
                </legend>
                {scheduleItems.map((scheduleItem, index) =>{
                    return(
                        <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                                name="week-day" 
                                label="Dia da semana"
                                onChange={(e) =>
                                    setScheduleItemValue(index, "week_day", e.target.value)
                                }
                                options ={[
                                    {value: '0', label: 'Domingo'},
                                    {value: '1', label: 'Segunda'},
                                    {value: '2', label: 'Terça'},
                                    {value: '3', label: 'Quarta'},
                                    {value: '4', label: 'Quinta'},
                                    {value: '5', label: 'Sexta'},
                                    {value: '6', label: 'Sabado'},
                                ]}
                            />
                            <Input
                                name="from"
                                label="Das"
                                type="time"
                                value={scheduleItem.from}
                                onChange={(e) =>
                                setScheduleItemValue(index, "from", e.target.value)
                                }
                            />
                            <Input
                                name="to"
                                label="Até"
                                type="time"
                                value={scheduleItem.to}
                                onChange={(e) =>
                                setScheduleItemValue(index, "to", e.target.value)
                                }
                            />
                        </div>
                    )
                })}
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante!<br/>
                    Preencha todos os dados
                </p>
                <button type="submit">Salvar Cadastro</button>
            </footer>
        </form>
        </main>
        </div>
    )
}

export default TeacherForm;