import React, { Component } from "react";
import CardNota from "../CardNota";
import "./listanotas.css";

class ListaNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas-item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
