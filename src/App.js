import React from 'react';
import './App.css';

class App extends React.Component {   		    

	constructor(props) {
		super(props);
		//this.executa = this.executa.bind(this);
        this.state = {rows: []};
    }

	next(){

		let rows = []
	  
		let numRand = Math.floor(Math.random() * 61 + 1);
		
		var url = "https://swapi.co/api/planets/"+numRand;
	   
		var xhttp = new XMLHttpRequest();
			  xhttp.open("GET", url, false);
			xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
			  if (xhttp.readyState === 4 && xhttp.status === 200 ) {//Verifica se o retorno do servidor deu certo
				  
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("name"),xhttp.responseText.indexOf("rotation")-3))					  
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("population"),xhttp.responseText.indexOf("residents")-3))
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("climate"),xhttp.responseText.indexOf("gravity")-3))
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("terrain"),xhttp.responseText.indexOf("surface_water")-3))
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("films"),xhttp.responseText.indexOf("created")-3))
			  }
			}
			 xhttp.send(); 		             

			 this.setState({rows: rows});

		return(
		  <div className="App">		  
			<table align="center" border="1">{rows.map(this.renderRow)}</table>
			
		   </div>		 
		  
		  );
	

	}

	executa(){
		
		let rows = []
	  
		let numRand = Math.floor(Math.random() * 61 + 1);
		
		var url = "https://swapi.co/api/planets/"+numRand;
	   
		var xhttp = new XMLHttpRequest();
			  xhttp.open("GET", url, false);
			xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
			  if (xhttp.readyState === 4 && xhttp.status === 200 ) {//Verifica se o retorno do servidor deu certo
				  
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("name"),xhttp.responseText.indexOf("rotation")-3))					  
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("population"),xhttp.responseText.indexOf("residents")-3))
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("climate"),xhttp.responseText.indexOf("gravity")-3))
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("terrain"),xhttp.responseText.indexOf("surface_water")-3))
				  rows.push(xhttp.responseText.substring(xhttp.responseText.indexOf("films"),xhttp.responseText.indexOf("created")-3))
			  }
			}
			 xhttp.send(); 		             

		return(
		  <div className="App">		  
			<table align="center" border="1">{rows.map(this.renderRow)}</table>
			<button onClick={this.next.bind(this)}>Next</button>
		   </div>		 
		  
		  );
		   
	} 

	renderRow(row){
		
		if(row.substr(0,row.indexOf('":"'))==="name") return <tr><td>Planeta: {row.substr(row.indexOf("name")+7,row.length)}</td></tr>
		else if (row.substr(0,row.indexOf('":"')) ==="population") return <tr><td>Population: {row.substr(row.indexOf("population")+13,row.length)}</td></tr>
		else if (row.substr(0,row.indexOf('":"')) ==="climate") return <tr><td>Climate: {row.substr(row.indexOf("climate")+10,row.length)}</td></tr>
		else if (row.substr(0,row.indexOf('":"')) ==="terrain") return <tr><td>Terrain: {row.substr(row.indexOf("terrain")+10,row.length)}</td></tr>
		else if (row.substr(0,row.indexOf('":["')) ==="films") return <tr><td>Featured in : {row.split(",").length}</td></tr>
	}
  
  render() {
	  
	 return this.executa();
		
    }
  
}

export default App;
