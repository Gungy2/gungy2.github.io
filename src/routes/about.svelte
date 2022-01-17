<script>
	import photo from '/static/photo.jpg';
	import insta from '/static/insta.svg';
	import github from '/static/git.svg';
	import linkedin from '/static/in.svg';
	import fb from '/static/fb.svg';
	import Technology from '../components/Technology.svelte';
	import java from '/static/java.svg';
	import c from '/static/c.svg';
	import python from '/static/python.svg';
	import haskell from '/static/haskell.svg';
	import js from '/static/js.svg';
	import react from '/static/react.svg';
	import html from '/static/html.svg';
	import css from '/static/css.svg';
	import vc from '/static/vc.svg';
	import sql from '/static/sql.svg';
	import elm from '/static/elm.svg';
	import rust from '/static/rust.png';
	import solidity from '/static/solidity.svg';
	import kotlin from '/static/kotlin.png';
	import flutter from '/static/flutter.png';
	import svelte from '/static/svelte.png';
	import flask from '/static/flask.svg';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main id>
	<h1 id="aboutMe">About Me</h1>
	<section id="picture">
		<img src={photo} alt="George in Central London" />
	</section>

	<section class="card" id="intro">
		<h2>Introduction</h2>
		<p class="card-text">
			My name is <span style="font-weight: bold;">George Ungureanu Vrânceanu</span>. If you can not
			pronounce that, do not worry, I can barely pronounce it myself.
		</p>
		<p class="card-text">
			I am a 21-year-old Romanian (soon to be) Software Engineer, who immigrated to the United
			Kingdom in order to study computing at Imperial College London. I have always loved computers
			and I have been passionate about technology from a very young age.
		</p>
		<p class="card-text">
			My hobbies include handball refereeing, going to the gym, playing video games (my dream is to
			become a game developer one day) and, at the risk of sounding a bit cliché, programming.
		</p>
		<p class="card-text">
			I always try to be active both on GitHub, where I am always working on a project (this little
			website included), and on social media, so feel free to give me a star or a follow at the
			links below:
		</p>
		<div id="links">
			<a
				href="https://www.linkedin.com/in/george-ungureanu-vranceanu-b11957185/"
				target="_blank"
				rel="noreferrer"><img src={linkedin} alt="linkedin" /></a
			>
			<a href="https://github.com/Gungy2" target="_blank" rel="noreferrer"
				><img src={github} alt="github" /></a
			>
			<a href="https://www.facebook.com/george.ungureanuvranceanu" target="_blank" rel="noreferrer"
				><img src={fb} alt="facebook" /></a
			>
			<a href="https://www.instagram.com/george_1011" target="_blank" rel="noreferrer"
				><img src={insta} alt="instagram" /></a
			>
		</div>
	</section>
	<section class="card" id="education">
		<h2 class="card-title">Education</h2>
		<h3 class="card-subtitle">
			<a href="https://www.imperial.ac.uk/" target="_blank" rel="noreferrer">
				Imperial College London
			</a>
		</h3>

		<p class="card-text">
			Currently I am a third year student at Imperial College London, working towards a MEng in
			Computing. I finished my first year with as <em>first class</em> (84 overall), while also
			being on the <em><strong>Dean's List</strong></em> . Here I have gained strong knowledge in a wide
			variety of subjects including data structures, networking and theoretical computer science. I expect
			to graduate in 2023.
		</p>

		<h3 class="card-subtitle">
			<a href="https://www.cnvranceanu.ro/" target="_blank" rel="noreferrer">
				National College "Gh. Vranceanu" Bacau, Romania
			</a>
		</h3>

		<p class="card-text">
			From 2015 to 2019, I studied at the best highschool in my home city, where I established my
			foundations in Mathematics and Science.
		</p>
	</section>

	<section class="card" id="work">
		<h2 class="card-title">Work Experience</h2>
		<p class="card-text">
			I have no work experience yet, so I am open to any opportunities, especially summer
			internships.
		</p>
		<p class="card-text">
			If you want to see some of my most notable projects, go to my <a href="/portofolio"
				>portfolio</a
			> page.
		</p>
		<p class="card-text">
			On the other hand, if I already seem like a good developer to you, go ahead and send me a
			message in the <a href="/contact">contact</a> page or at my
			<a href="mailto:gungureanuvranceanu@gmail.com">email address</a>.
		</p>
	</section>
	<section class="card" id="tech">
		<h2 class="card-title">Known Technologies</h2>
		<p class="card-text">
			Here are some programming languages and technologies that I have learnt and practiced over the
			years. Even though I have not used them in a professional environment yet, I am confident that
			I would be up to speed with any team in a very short time.
		</p>
		<ul>
			<Technology name="Java" path={java} />
			<Technology name="C" path={c} />
			<Technology name="Pyhton" path={python} />
			<Technology name="Haskell" path={haskell} />
			<Technology name="JavaScript" path={js} />
			<Technology name="React" path={react} />
			<Technology name="HTML5" path={html} />
			<Technology name="CSS" path={css} />
			<Technology name="Git" path={vc} />
			<Technology name="SQL" path={sql} />
			<Technology name="Elm" path={elm} />
			<Technology name="Rust" path={rust} />
			<Technology name="Solidity" path={solidity} />
			<Technology name="Kotlin" path={kotlin} />
			<Technology name="Svelte" path={svelte} />
			<Technology name="Flutter" path={flutter} />
			<Technology name="Flask" path={flask} />
		</ul>
	</section>
</main>

<style>
	.card {
		padding: 20px;
		width: 90vw;
		background-color: rgb(245, 245, 245, 0.4);
		margin: auto;
		margin-bottom: 30px;
	}

	.card:hover {
		background-color: rgb(245, 245, 245, 1);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding-left: 0;
		padding-right: 0;
	}

	h1 {
		margin-top: 90px;
		text-align: center;
		font-size: 6em;
	}

	h2 {
		margin: 20px 0;
	}

	#picture {
		margin-bottom: 30px;
		height: auto;
		margin: 0 30px;
		margin-bottom: 30px;
	}

	a {
		color: #41403e;
	}

	#links {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	#links > a {
		background-image: none;
	}

	#links > a > img {
		width: 50px;
	}

	@media only screen and (min-width: 768px) {
		main {
			margin: auto;
			display: grid;
			width: 90vw;
			gap: 40px;
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'about about'
				'intro   pic'
				'edu     pic'
				'edu   work'
				'tech  tech ';
		}

		p {
			font-size: 1.2em;
		}

		.card {
			width: auto;
		}

		#aboutMe {
			grid-area: about;
		}

		#work {
			grid-area: work;
		}

		#tech {
			grid-area: tech;
		}

		#education {
			grid-area: edu;
		}

		#picture {
			grid-area: pic;
		}

		#intro {
			grid-area: intro;
		}
	}
</style>
