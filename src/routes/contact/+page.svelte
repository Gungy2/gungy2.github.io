<svelte:head>
  <title>Contact</title>
</svelte:head>

<main>
  <h1>Contact</h1>
  <form action="https://formspree.io/gungureanuvranceanu@gmail.com" method="POST">
    <input type="text" name="name" placeholder="Full Name" required />
    <input type="email" name="email" placeholder="Email address" required />
    <input type="text" name="subject" placeholder="Subject" required />
    <textarea name="message" cols="30" rows="8" placeholder="Message" wrap="hard" required />
    <button type="submit">Send</button>
  </form>
</main>

<style>
  h1 {
    margin-top: 120px;
  }

  main {
    text-align: center;
    background-color: transparent;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input,
  textarea {
    width: 500px;
    max-width: 90vw;
    margin: 20px 30px;
    font-size: 1.2em;
  }

  input:focus,
  textarea:focus {
    background-color: #ffffff;
  }
</style>
