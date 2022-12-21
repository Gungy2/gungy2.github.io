<script>
  import Modal from './Modal.svelte';
  import ProjectCard from './ProjectCard.svelte';
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<main id>
  <h1>Notable Projects</h1>

  <ProjectCard name="lostcoin" technologies={['Solidity', 'Python', 'React']}>
    <div slot="links" class="links">
      <Modal project="lostcoin" />
      <a href="http://www.lostcoin.io"><img src="/web.svg" alt="Web Link" /></a>
    </div>

    <span slot="text">
      <strong>Lostcoin</strong> is a blockchain project that I did in a group of 7 as the third year
      Software Engineering project at Imperial. It is a combination of a cryptocurrency and an NFT based
      on lost Bitcoin Wallets. It is deployed on the Ethereum network and all the smart contracts are
      written using Solidity. I would love to talk more about this project, so do not hesitate to contact
      me if this seems interesting!
    </span>
  </ProjectCard>

  <ProjectCard name="minesweepelm" technologies={['Elm', 'HTML5', 'CSS']}>
    <div slot="links" class="links">
      <a href="https://github.com/Gungy2/minesweepelm"><img src="/git.svg" alt="GitHub Link" /></a>
      <a href="https://gungy2.github.io/minesweepelm"><img src="/web.svg" alt="Web Link" /></a>
    </div>

    <span slot="text">
      <strong>Minesweepelm</strong> is a cool, simple minesweeper game created in Elm. It was a bit of
      a challenge because of the uniqueness of the programming language: while Elm is similar with Haskell,
      working with a purely functional language in the frontend was trickier than I had expected. Overall,
      I actually fell in love with Elm, so I am definitely looking forward to using it even in a professional
      environment!
    </span>
  </ProjectCard>

  <ProjectCard title="ARM Assembler / Emulator / Debugger" name="debugger" technologies={['C']}>
    <div class="links" slot="links">
      <Modal project="arm" />
    </div>

    <span slot="text">
      This is probably my biggest and most complex project, completed in a team of 4, as part of my
      first year at Imperial College London. Being a very low level task, the source code is written
      in C, taking advantage of many of its features. It converts ARM assembly language into ARM
      machine code that can be executed on the emulator. The debugger works similarly to the GDB,
      being able to step through the assembly program, set breakpoints and even watch registers.
    </span>
  </ProjectCard>

  <ProjectCard name="FiFish" technologies={['React', 'HTML5', 'CSS']}>
    <div class="links" slot="links">
      <a href="https://github.com/Gungy2/FiFish"><img src="/git.svg" alt="GitHub Link" /></a>
      <a href="https://gungy2.github.io/FiFish"><img src="/web.svg" alt="Web Link" /></a>
    </div>

    <span slot="text">
      <strong>FiFish</strong> is probably my dearest personal project, because it is also my first
      (more serious) one. It is a purely frontend website, made using the public
      <a href="https://www.fishwatch.gov/">FishWatch.gov</a> API. The concept is very simple: just search
      for a fish (or seafood) and you will see lots of interesting facts about the species, such as appearance,
      biology and a surprising collection of pictures.
    </span>
  </ProjectCard>
</main>

<style lang="scss">
  h1 {
    margin-top: 120px;
    text-align: center;
  }

  .links {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-right: 50px;

    img {
      margin-top: 10px;
      width: 50px;
    }

    a {
      background-image: none;
    }
  }
</style>
