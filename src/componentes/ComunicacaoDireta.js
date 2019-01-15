import React from 'react'
import {View, Text} from 'react-native'

const fonte = {style: {fontSize: 30}}

function clonaPropsPaiParaFilho(props) {
    return React.Children.map(props.children,
            c => React.cloneElement(c, {...props, ...c.props})
        )
}

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {clonaPropsPaiParaFilho(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Gui' />
            <Filho nome='Davi' />
        </Pai>
        <Pai {...props} nome ='Pedro' >
            <Filho nome='Ana' />
            <Filho nome='Gui' />
        </Pai>
    </View>

export default Avo
