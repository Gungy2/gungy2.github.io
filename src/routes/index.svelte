<main>
	<h1>Welcome!</h1>
	<h2>
		My name is <strong>George</strong>, computer enthusiast and (very soon to be) Software Engineer.
	</h2>
	<h2>If you wish to know more about me, <a href="/about">click here!</a></h2>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		margin-top: 120px;
    margin-bottom: 40px;
		font-weight: bold;
	}
	h2 {
		width: 90vw;
    margin-top: 10px;
		text-align: center;
	}

	@media only screen and (min-width: 768px) {
		h1 {
			font-size: 10em;
		}
		h2 {
			font-size: 5em;
			margin: 30px 0;
		}
	}
</style>
