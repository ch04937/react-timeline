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
		<div className={styles.app}>
			<h1>React Timeline</h1>

			<div className={styles.cards}>
				<div className={styles.content}>
					{timeLineArray.map((data, idx) => (
						<div key={idx}>
							<span
								className={styles.tag}
								style={{ background: data.category.color }}
							>
								{data.category.tag}
							</span>
							<time>{data.date}</time>
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
							<span className={styles.circle} />)
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
