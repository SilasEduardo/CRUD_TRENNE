import { FaEdit, FaWindowClose } from 'react-icons/fa';
import {  EditButto, DeleteButton, Matricula} from '../Table/steled';

function Lista({ alunos }: any){

  return(
    
    <>
    
    {alunos.map((aluno: any) => {

      function mediaCalculada(){

        const mediasNotas = aluno.grade.map((nota: number) => {
          let soma = 0;
          soma += nota;
          return soma;
        });
        let soma = 0;
        let media = 0;
  
  
        for(let nota in mediasNotas){
  
          soma += mediasNotas[nota];
          media = soma / 5;
  
        };

        return media.toFixed(1)

      }

    

  
      function statusMatricula(){
        let statusMatricula = '';
        if(aluno.status){
          statusMatricula = "ativa"
        }else{
          statusMatricula = "inativa"
        }
        return statusMatricula
        
      }

      return(
        <tr key={aluno.id}>
        <td>{aluno.firtName}</td>
        <td>{aluno.age}</td>
        <td>{aluno.email}</td>
        <td>{mediaCalculada()}</td>
        <Matricula isActive={aluno.status}><td className='matricula'>{statusMatricula()}</td></Matricula>
        <td><EditButto><FaEdit className='editButton' /></EditButto></td>
        <td><DeleteButton><FaWindowClose className='deleteButton' /></DeleteButton> </td>
        </tr>
      
      )
    })}
    </>
  )
}

export default Lista