<script lang="ts">
	import 'papercss/dist/paper.min.css';
	import cv from '/static/CV.pdf';
</script>

<nav class="border fixed split-nav">
	<div class="nav-brand">
		<h3><a href="/">© George U.V.</a></h3>
	</div>
	<div class="collapsible">
		<input id="collapsible1" type="checkbox" name="collapsible1" />
		<label for="collapsible1">Menu</label>
		<div class="collapsible-body">
			<ul class="inline">
				<li><a href="/about">About</a></li>
				<li><a href="/portfolio">Portfolio</a></li>
				<li><a href={cv} rel="external">Résumé</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
	</div>
</nav>
<slot />

<style>
	div > label {
		font-size: 1em;
	}
	li > a {
		font-size: 1.5em;
	}
</style>
