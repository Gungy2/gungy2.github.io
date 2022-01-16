<script>
	import photo from '/static/photo.jpg';
	import insta from '/static/insta.svg';
	import github from '/static/git.svg';
	import linkedin from '/static/in.svg';
	import fb from '/static/fb.svg';
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
</script>

<main id>
	<h1 id="aboutMe">About Me</h1>
	<section id="picture">
		<img src={photo} alt="George in Central London" />
	</section>

	<section class="card" id="intro">
		<h2>Introduction</h2>
		<article>
			<p>
				My name is <span style="font-weight: bold;">George Ungureanu Vrânceanu</span>. If you can
				not pronounce that, do not worry, I can barely pronounce it myself.
			</p>
			<p>
				I am a 21-year-old Romanian (soon to be) Software Engineer, who immigrated to the United
				Kingdom in order to study computing at Imperial College London. I have always loved
				computers and I have been passionate about technology from a very young age.
			</p>
			<p>
				My hobbies include handball refereeing, going to the gym, playing video games (my dream is
				to become a game developer one day) and, at the risk of sounding a bit cliché, programming.
			</p>
			<p>
				I always try to be active both on GitHub, where I am always working on a project (this
				little website included), and on social media, so feel free to give me a star or a follow at
				the links below:
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
				<a
					href="https://www.facebook.com/george.ungureanuvranceanu"
					target="_blank"
					rel="noreferrer"><img src={fb} alt="facebook" /></a
				>
				<a href="https://www.instagram.com/george_1011" target="_blank" rel="noreferrer"
					><img src={insta} alt="instagram" /></a
				>
			</div>
		</article>
	</section>
	<section class="card" id="education">
		<h2 class="card-title">Education</h2>
		<article>
			<h3 class="card-subtitle">
				<a href="https://www.imperial.ac.uk/" target="_blank" rel="noreferrer">
					Imperial College London
				</a>
			</h3>

			<p>
				Currently I am a third year student at Imperial College London, working towards a MEng in
				Computing. I finished my first year with as
				<span style="font-style: italic;">first class</span>
				(84 overall), while also being on the
				<span style="font-weight: bold; font-style: italic;">Dean's List</span>. Here I have gained
				strong knowledge in a wide variety of subjects including data structures, networking and
				theoretical computer science. I expect to graduate in 2023.
			</p>

			<h3 class="card-subtitle">
				<a href="https://www.cnvranceanu.ro/" target="_blank" rel="noreferrer">
					National College "Gh. Vranceanu" Bacau, Romania
				</a>
			</h3>

			<p>
				From 2015 to 2019, I studied at the best highschool in my home city, where I established my
				foundations in Mathematics and Science.
			</p>
		</article>
	</section>
	<section class="card" id="work">
		<h2>Work Experience</h2>
		<article>
			<p>
				I have no work experience yet, so I am open to any opportunities, especially summer
				internships.
			</p>
			<p>
				If you want to see some of my most notable projects, go to my <a href="/">portfolio</a> page.
			</p>
			<p>
				On the other hand, if I already seem like a good developer to you, go ahead and send me a
				message in the <a href="/">contact</a> page or at my
				<a href="mailto:gungureanuvranceanu@gmail.com">email address</a>.
			</p>
		</article>
	</section>
	<section class="card" id="tech">
		<h2>Known Technologies</h2>
		<article>
			<p>
				Here are some programming languages and technologies that I have learnt and practiced over
				the years. Even though I have not used them in a professional environment yet, I am
				confident that I would be up to speed with any team in a very short time.
			</p>
			<ul>
				<li><img src={java} alt="Java" />Java</li>
				<li><img src={c} alt="C" />C</li>
				<li><img src={python} alt="Python" />Python</li>
				<li><img src={haskell} alt="Haskell" />Haskell</li>
				<li><img src={js} alt="JavaScript" />JavaScript</li>
				<li><img src={react} alt="React" />React</li>
				<li><img src={html} alt="HTML5" />HTML5</li>
				<li><img src={css} alt="CSS" />CSS</li>
				<li><img src={vc} alt="Git" />Git</li>
				<li><img src={sql} alt="SQL" />SQL</li>
				<li><img src={elm} alt="Elm" />Elm</li>
				<li><img src={rust} alt="Rust" />Rust</li>
				<li><img src={solidity} alt="Solidity" />Solidity</li>
				<li><img src={kotlin} alt="Kotlin" />Kotlin</li>
			</ul>
		</article>
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

	#tech img {
		margin: auto;
		margin-bottom: 10px;
		height: 30px;
		width: 30px;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding-left: 0;
		padding-right: 0;
	}

	ul li::before {
		display: none;
	}

	ul li {
		text-align: center;
		margin: 10px 30px;
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

		#tech img {
			margin: auto;
			margin-bottom: 10px;
			height: 50px;
			width: 50px;
		}

		ul li {
			margin: 20px 50px;
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
