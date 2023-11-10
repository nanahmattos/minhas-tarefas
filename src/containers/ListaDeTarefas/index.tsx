import { useSelector } from 'react-redux/es/exports'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

// O ARRAY FOI PARA O store>reducers>tarefas.ts
// const tarefas = [
//   {
//     titulo: 'Fazer Tarefa',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.CONCLUIDA,
//     descricao: 'tarefa ebac mod 28'
//   },
//   {
//     titulo: 'Fazer Tarefa',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.CONCLUIDA,
//     descricao: 'tarefa ebac mod 28'
//   },
//   {
//     titulo: 'Fazer Tarefa',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE,
//     descricao: 'tarefa ebac mod 28'
//   }
// ]

const ListaDeTarefas = () => {
  // const tarefas = useSelector((state: RootReducer) => state.tarefas)
  //REESTRUTURAÇÃO
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  } // toLowerCase() : ignora se a letra e maiusculo ou minuscula

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) econtrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) de "${criterio}" encontrada(s) como: ${valor} ${complementacao}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {/* key é o único atributo que pode ser passado para o Fragment. */}
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
