import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiências profissionais"
				body={
					<div className="works-body">
						<div className="work">
							{/* <img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/> */}
							
							<div className="work-title">Desenvolvedor Full Stack Jr</div>
							<div className="work-subtitle">
								8sys Desenvolvimento de Programas
							</div>
							<div className="work-duration">2023 - Presente</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Estágiario de TI</div>
							<div className="work-subtitle">
								CRG Gestão Contábil
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
