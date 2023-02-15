import { json } from "stream/consumers";
import { Alert } from "flowbite-react";

const url = "http://pdvfood.kinghost.net:21026/api/products";

export async function PostProduto({ codigo, nome, preco, categoria, unidade }) {
	let data = {
		nome: nome,
		preco: preco,
		codigo: codigo,
		categoria: categoria,
		unidade: unidade,
		ativo: 1,
	};
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response)
		.catch(() => {
			alert("Erro ao cadastrar !");
		});
}

export async function GetProduto() {
	return fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((data) => data.json())
		.catch(() => {
			alert("Erro na consulta de produtos!");
		});
}

export async function UpdateProduto({
	id,
	codigo,
	nome,
	preco,
	categoria,
	unidade,
}) {
	let data = {
		nome: nome,
		preco: preco,
		codigo: codigo,
		categoria: categoria,
		unidade: unidade,
	};
	return fetch(`${url}/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response)
		.catch(() => {
			alert("Erro ao editar Produto !");
		});
}

export async function ExcluirProduto(id) {
	return fetch(`${url}/${id}`, {
		method: "DELETE",
	})
		.then((data) => data.json())
		.catch(() => {
			alert("Erro ao deletar produto !");
		});
}
