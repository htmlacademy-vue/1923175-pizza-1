<template>
  <div class="sign-form">
    <router-link to="/" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </router-link>
    <div class="sign-form__title">
      <h1 class="title title--small">Авторизуйтесь на сайте</h1>
    </div>
    <form action="#" method="post" @submit.prevent="login">
      <div class="sign-form__input">
        <AppInput
          ref="email"
          v-model="email"
          type="email"
          name="email"
          class="input"
          placeholder="E-mail"
          :error-text="validations.email.error"
        />
      </div>

      <div class="sign-form__input">
        <AppInput
          v-model="password"
          type="password"
          name="password"
          class="input"
          placeholder="Пароль"
          data-test="password-component"
          :error-text="validations.password.error"
        />
      </div>
      <button type="submit" class="button">Авторизоваться</button>
    </form>
  </div>
</template>
<script>
import validator from "@/common/mixins/validator";
import AppInput from "@/common/components/AppInput";

export default {
  name: "Login",
  mixins: [validator],
  components: {
    AppInput,
  },
  data: () => ({
    email: "",
    password: "",
    validations: {
      email: {
        error: "",
        rules: ["required", "email"],
      },
      password: {
        error: "",
        rules: ["required"],
      },
    },
  }),
  watch: {
    email() {
      this.$clearValidationErrors();
    },
    password() {
      this.$clearValidationErrors();
    },
  },
  mounted() {
    this.$refs.email.$refs.input.focus();
  },
  methods: {
    async login() {
      if (
        !this.$validateFields(
          { email: this.email, password: this.password },
          this.validations
        )
      ) {
        return;
      }

      await this.$store.dispatch("Auth/login", {
        email: this.email,
        password: this.password,
      });

      await this.$router.push("/");
    },
  },
};
</script>
