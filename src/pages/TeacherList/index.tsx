import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem , {Teacher} from '../../components/TeacherItem';
import Select from '../../components/Select'
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css';


function TeacherList(){
    
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState("");
  
    async function searchTeachers(e: FormEvent) {
      e.preventDefault();
  
      const res = await api.get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });
  
      setTeachers(res.data);
    }
    
    return(
        <div id="teacher-list-page" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options ={[
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Matematica', label: 'Matematica'},
                            {value: 'Fisica', label: 'Fisica'},
                            {value: 'Quimica', label: 'Quimica'},
                            {value: 'Sociologia', label: 'Sociologia'},
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => setWeekDay(e.target.value)}
                        options={[
                        { value: "0", label: "Domingo" },
                        { value: "1", label: "Segunda-Feira" },
                        { value: "2", label: "Terça-Feira" },
                        { value: "3", label: "Quarta-Feira" },
                        { value: "4", label: "Quinta-Feira" },
                        { value: "5", label: "Sexta-Feira" },
                        { value: "6", label: "Sábado" },
                        ]}
                    />
                    <Input
                        name="time"
                        label="Hora"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />    
                    <button type="submit">
                        Buscar
                    </button>             
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}

export default TeacherList;