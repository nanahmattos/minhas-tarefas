import styled from 'styled-components'

// import { Props } from '.'
// type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio'>
// //omitindo props legenda e contador
// //passando as propriedades para o bloco <Props>

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  // adicionando regrinha, se props for ativo entao recebera cor azul, caso contrario continuara na mesma cor
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
