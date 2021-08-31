import React, { Component } from "react";
import { Momento } from 'momento';
import './cardnota.css'

class CardNota extends Component {

  constructor() {
    super();
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
   
    this.state = {
      currentTime: time
    }
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota-titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota-texto">{this.props.texto}</p>
        <p className="card-nota-hora">Atualizado as :{ this.state.currentTime }</p>
      </section>
    );
  }
}

export default CardNota;
