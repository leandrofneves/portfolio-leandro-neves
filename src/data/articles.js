import React from "react";

function article_1() {
	return {
		date: "Fev de 2022",
		title: "Graduação em Análise e Desenvolvimento de Sistemas",
		description:
			"Atualmente, estou cursando Graduação em Análise e Desenvolvimento de Sistemas na Fatec Ministro Ralph Biasi em Americana, SP. Durante o curso, tenho adquirido conhecimentos aprofundados em desenvolvimento de software, análise de sistemas e gestão de projetos, preparando-me para atuar de maneira eficaz e inovadora na área de tecnologia.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Dez de 2021",
		title: "Curso Técnico em Desenvolvimento de Sistemas",
		description:
			"Concluí o Curso Técnico em Desenvolvimento de Sistemas no Senai Alvares Romi em Santa Bárbara d'Oeste, SP, em 2021. Durante essa formação, adquiri uma base sólida em programação, desenvolvimento web e banco de dados.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
