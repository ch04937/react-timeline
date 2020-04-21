import React from "react";
import styles from "./app.module.scss";

/** 
 GOAL: 
	Create a time line 
*/

function App() {
	const timeLineArray = [
		{
			text: "All the studies",
			date: "March 03 2017",
			category: {
				tag: "vaccine",
				color: "#018f69",
			},
			link: {
				url: "addrees",
				text: "Link to study",
			},
		},
		{
			text: "some of the studies ",
			date: "March 03 2017",
			category: {
				tag: "vaccine",
				color: "#018f69",
			},
			link: {
				url: "addrees",
				text: "Link to study",
			},
		},
		{
			text: "the rest of the studies",
			date: "March 03 2017",
			category: {
				tag: "alternatives",
				color: "red",
			},
			link: {
				url: "addrees",
				text: "Link to study",
			},
		},
	];

	return (
		<div>
			<h1>React Timeline</h1>

			<div className={styles.container}>
				{timeLineArray.map((data, idx) => (
					<div className={styles.item} key={idx}>
						<div className={styles.pointer}>&#9655;</div>
						<div className={styles.content}>
							<span
								className={styles.tag}
								style={{ background: data.category.color }}
							>
								{data.category.tag}
							</span>
							<p style={{ color: "#777" }}>{data.date}</p>
							<p>{data.text}</p>
							{data.link && (
								<a
									href={data.link.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{data.link.text}
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
