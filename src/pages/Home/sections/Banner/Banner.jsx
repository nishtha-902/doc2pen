import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./banner.module.scss";

function Banner() {
	const history = useHistory();
	function redirectToEditor() {
		history.push("/editor");
	}

	return (
		<section className={styles.Home} id="home_banner">
			<div className={styles.content}>
				<div className={styles.text}>
					<div>Type Documents in your own Handwriting.</div>
					<button className={styles.button} onClick={redirectToEditor}>
						CHECK IT OUT!
					</button>
				</div>
				<div className={styles.image}>
					<img src="https://images.unsplash.com/photo-1601321268954-22646044f7d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlbnxlbnwwfHwwfHx8MA%3D%3D" alt="Pen" className="rounded-xl"/>
				</div>
			</div>
			<div className={`${styles.wave} ${styles.wave1}`}></div>
			<div className={`${styles.wave} ${styles.wave2}`}></div>
			<div className={`${styles.wave} ${styles.wave3}`}></div>
			<div className={`${styles.wave} ${styles.wave4}`}></div>
		</section>
	);
}

export default Banner;
