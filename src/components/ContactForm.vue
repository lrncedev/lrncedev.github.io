<template>
  <div class="w-80">
    <div class="contact-form" id="contact">
      <h1>Get in touch</h1>
      <form>
        <div class="grid-1">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" />
          <label for="contact">Contact No:</label>
          <input type="tel" name="contact" id="contact" />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="grid-2">
          <label for="message">Message</label>
          <textarea name="message" id="message"></textarea>
          <div class="btn-send">
            <button type="submit" class="send">Send</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
};
</script>
<style lang="scss">
.contact-form {
  color: white;
  width: 80%;
  padding: 1.5em 1rem;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  form {
    padding: 0 2em;
    display: grid;
    grid-template-columns: 1fr;

    label {
      font-size: clamp(1.1rem, 1.5vw, 1.3rem);
      font-weight: 300;
    }

    .grid-1,
    .grid-2 {
      display: flex;
      flex-direction: column;
    }

    .grid-2 {
      textarea {
        height: 100px;
        resize: none;
      }

      .btn-send {
        // width: 20%;
        margin-top: 0.4em;
        align-self: flex-end;

        .send {
          // text-align: right;
          background-color: $color-accent;
          border: none;
          font-size: clamp(1rem, 1vw, 1.2rem);
          border-radius: 5px;
          font-weight: 900;
          padding: 0.4rem 0.8rem;
        }
      }
    }
  }
}

@media screen and (min-width: 40em) {
  .contact-form {
    form {
      column-gap: 1em;
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>