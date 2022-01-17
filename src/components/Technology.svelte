<script lang="ts">
	export let name: string;
	export let path: string;
</script>

<li><img src={path} alt={name} />{name}</li>

<style>
	li::before {
		display: none;
	}

	li {
		text-align: center;
		margin: 10px 30px;
	}

	img {
		margin: auto;
		margin-bottom: 10px;
		height: 30px;
		width: 30px;
	}

	@media only screen and (min-width: 768px) {
		img {
			margin: auto;
			margin-bottom: 10px;
			height: 50px;
			width: 50px;
		}

		li {
			margin: 20px 50px;
		}
	}
</style>
