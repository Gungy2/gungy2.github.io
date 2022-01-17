<script>
	import Modal from '../components/Modal.svelte';
	import Technology from '../components/Technology.svelte';
	import fifish from '/static/FiFish.gif';
	import debug from '/static/debugger.gif';
	import minesweepelm from '/static/minesweepelm.gif';
	import lostcoin from '/static/lostcoin.gif';
	import git from '/static/git.svg';
	import web from '/static/web.svg';
	import c from '/static/c.svg';
	import python from '/static/python.svg';
	import react from '/static/react.svg';
	import html from '/static/html.svg';
	import css from '/static/css.svg';
	import elm from '/static/elm.svg';
	import solidity from '/static/solidity.svg';
</script>

<svelte:head>
	<title>Portofolio</title>
</svelte:head>

<main id>
	<h1>Notable Projects</h1>

	<section class="card">
		<article class="card-body">
			<div class="head">
				<h2 class="card-title">Lostcoin</h2>
				<div class="links">
					<Modal project="lostcoin" />
					<a href="http://www.lostcoin.io"><img src={web} alt="Web Link" /></a>
				</div>
			</div>

			<p class="card-text">
				<strong>Lostcoin</strong> is a blockchain project that I did in a group of 7 as the third year
				Software Engineering project at Imperial. It is a combination of a cryptocurrency and an NFT
				based on lost Bitcoin Wallets. It is deployed on the Ethereum network and all the smart contracts
				are written using Solidity. I would love to talk more about this project, so do not hesitate
				to contact me if this seems interesting!
			</p>
			<ul>
				<Technology name="Solidity" path={solidity} />
				<Technology name="Pyhton" path={python} />
				<Technology name="React" path={react} />
			</ul>
		</article>

		<img src={lostcoin} alt="Lostcoin Demo" />
	</section>

	<section class="card">
		<article class="card-body">
			<div class="head">
				<h2 class="card-title">Minesweepelm</h2>
				<div class="links">
					<a href="https://github.com/Gungy2/minesweepelm"><img src={git} alt="GitHub Link" /></a>
					<a href="https://gungy2.github.io/minesweepelm"><img src={web} alt="Web Link" /></a>
				</div>
			</div>

			<p class="card-text">
				<strong>Minesweepelm</strong> is a cool, simple minesweeper game created in Elm. It was a bit
				of a challenge because of the uniqueness of the programming language: while Elm is similar with
				Haskell, working with a purely functional language in the frontend was trickier than I had expected.
				Overall, I actually fell in love with Elm, so I am definitely looking forward to using it even
				in a professional environment!
			</p>
			<ul>
				<Technology name="Elm" path={elm} />
				<Technology name="HTML5" path={html} />
				<Technology name="CSS" path={css} />
			</ul>
		</article>

		<img src={minesweepelm} alt="Minesweepelm Demo" />
	</section>

	<section class="card">
		<article class="card-body">
			<div class="head">
				<h2 class="card-title">ARM Assembler / Emulator / Debugger</h2>
				<div class="links">
					<Modal project="arm" />
				</div>
			</div>

			<p class="card-text">
				This is probably my biggest and most complex project, completed in a team of 4, as part of
				my first year at Imperial College London. Being a very low level task, the source code is
				written in C, taking advantage of many of its features. It converts ARM assembly language
				into ARM machine code that can be executed on the emulator. The debugger works similarly to
				the GDB, being able to step through the assembly program, set breakpoints and even watch
				registers.
			</p>
			<ul>
				<Technology name="C" path={c} />
			</ul>
		</article>

		<img src={debug} alt="Debugger Demo" />
	</section>

	<section class="card">
		<article class="card-body">
			<div class="head">
				<h2 class="card-title">FiFish</h2>
				<div class="links">
					<a href="https://github.com/Gungy2/FiFish"><img src={git} alt="GitHub Link" /></a>
					<a href="https://github.com/Gungy2/FiFish"><img src={web} alt="Web Link" /></a>
				</div>
			</div>

			<p class="card-text">
				<strong>FiFish</strong> is probably my dearest personal project, because it is also my first
				(more serious) one. It is a purely frontend website, made using the public
				<a href="https://www.fishwatch.gov/">FishWatch.gov</a> API. The concept is very simple: just
				search for a fish (or seafood) and you will see lots of interesting facts about the species,
				such as appearance, biology and a surprising collection of pictures.
			</p>
			<ul>
				<Technology name="React" path={react} />
				<Technology name="HTML5" path={html} />
				<Technology name="CSS" path={css} />
			</ul>
		</article>

		<img src={fifish} alt="FiFish Demo" />
	</section>
</main>

<style>
	h1 {
		margin-top: 120px;
		text-align: center;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.links {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		margin-right: 50px;
	}

	.links img {
		margin-top: 10px;
		width: 50px;
	}

	.links a {
		background-image: none;
	}

	.head {
		display: flex;
		justify-content: space-between;
	}

	.card {
		width: 90vw;
		background-color: rgb(245, 245, 245, 0.4);
		margin: auto;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
	}

	.card:hover {
		background-color: rgb(245, 245, 245, 1);
	}

	h2 {
		max-width: 60%;
	}

	@media only screen and (min-width: 768px) {
		.card {
			flex-direction: row;
		}

		.card > img {
			width: 50%;
		}
	}
</style>
