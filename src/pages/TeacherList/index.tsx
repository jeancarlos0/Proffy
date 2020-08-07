import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';
import './styles.css';

function TeacherList(){
    return(
        <div id="teacher-list-page" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers">
                    <Input name="subject" label="Asssunto"/>
                    <Input name="week-day" label="Dia da semana"/>
                    <Input type="time" name="time" label="Hora"/>                   
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;