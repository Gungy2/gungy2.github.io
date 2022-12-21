<script>
  import { technologies } from '$lib/store';
  import Technology from '$lib/Technology.svelte';
  import AboutSection from './AboutSection.svelte';
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<main id>
  <h1 id="aboutMe">About Me</h1>
  <section id="picture">
    <img src="/photo.jpg" alt="George in Central London" />
  </section>

  <section class="card" id="intro">
    <h2>Introduction</h2>
    <p class="card-text">
      My name is <span style="font-weight: bold;">George Ungureanu Vrânceanu</span>. If you can not
      pronounce that, do not worry, I can barely pronounce it myself.
    </p>
    <p class="card-text">
      I am a 22-year-old Romanian Software Engineer, who immigrated to the United Kingdom in order
      to study computing at Imperial College London. I have always loved computers and I have been
      passionate about technology from a very young age.
    </p>
    <p class="card-text">
      My hobbies include handball refereeing, going to the gym, playing video games, more recently,
      finance, and, at the risk of sounding a bit cliché, programming.
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
        rel="noreferrer"><img src="/in.svg" alt="linkedin" /></a
      >
      <a href="https://github.com/Gungy2" target="_blank" rel="noreferrer"
        ><img src="/git.svg" alt="github" /></a
      >
      <a href="https://www.facebook.com/george.ungureanuvranceanu" target="_blank" rel="noreferrer"
        ><img src="/fb.svg" alt="facebook" /></a
      >
      <a href="https://www.instagram.com/george_1011" target="_blank" rel="noreferrer"
        ><img src="/insta.svg" alt="instagram" /></a
      >
    </div>
  </section>
  <section class="card" id="education">
    <h2 class="card-title">Education</h2>

    <AboutSection>
      <a slot="title" href="https://www.imperial.ac.uk/" target="_blank" rel="noreferrer">
        Imperial College London
      </a>
      <span slot="location">London, UK</span>
      <span slot="date">October 2019 - June 2023</span>
      <span slot="text">
        Currently I am a fourth year student at Imperial College London, working towards a MEng in
        Computing. I finished my first 3 years with as <em>first class</em> (79 overall), while also
        being on the <em><strong>Dean's List</strong></em> in my first year. Here I have gained strong
        knowledge in a wide variety of subjects including data structures, operating systems, databases,
        networking and theoretical computer science. I expect to graduate in 2023.
      </span>
    </AboutSection>

    <AboutSection>
      <a slot="title" href="https://www.cnvranceanu.ro/" target="_blank" rel="noreferrer">
        National College "Gh. Vranceanu"
      </a>
      <span slot="location">Bacau, Romania</span>
      <span slot="date">September 2015 - July 2019</span>
      <span slot="text">
        From 2015 to 2019, I studied at the best highschool in my home city, where I established my
        foundations in Mathematics and Science.
      </span>
    </AboutSection>
  </section>

  <section class="card" id="work">
    <h2 class="card-title">Work Experience</h2>

    <AboutSection>
      <a slot="title" href="https://www.imc.com/eu/" target="_blank" rel="noreferrer">
        IMC Trading
      </a>
      <span slot="location">Amsterdam, North Holland, Netherlands</span>
      <span slot="date">April 2022 - September 2022</span>
      <span slot="text">
        I worked in the Data Engineering team, with technologies such as Kafka and HDFS. My main
        project was building full stack visualizations to trace the flow of data through all systems
        in Kotlin and React.
      </span>
    </AboutSection>
  </section>

  <section class="card" id="tech">
    <h2 class="card-title">Known Technologies</h2>
    <p class="card-text">
      Here are some programming languages and technologies that I have learnt and practiced over the
      years. Even though I have not used them in a professional environment yet, I am confident that
      I would be up to speed with any team in a very short time.
    </p>
    <ul>
      {#each Object.keys($technologies) as name}
        <Technology {name} />
      {/each}
    </ul>
  </section>
</main>

<style lang="scss">
  .card {
    padding: 20px;
    width: 90vw;
    background-color: rgb(245, 245, 245, 0.4);
    margin: auto;
    margin-bottom: 30px;

    &:hover {
      background-color: rgb(245, 245, 245, 1);
    }
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

    & > a {
      background-image: none;
      & > img {
        width: 50px;
      }
    }
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
