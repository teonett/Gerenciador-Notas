import React, { Component } from "react";
import './formularionotas.css';

class FormularioNotas extends Component {

  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <h1 className="form-cadastro-header {">Gerador de Notas</h1>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro-input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro-input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro-input form-cadastro-submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioNotas;