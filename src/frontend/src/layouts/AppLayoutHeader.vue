<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart">{{ totalPrice }} ₽</router-link>
    </div>
    <div class="header__user">
      <template v-if="isAuthenticated">
        <router-link to="/profile" class="header__login">
          <picture>
            <source type="image/webp" :srcset="user.avatar" />
            <img
              :src="user.avatar"
              :srcset="user.avatar"
              :alt="user.name"
              width="32"
              height="32"
            />
          </picture>
          <span>{{ user.name }}</span>
        </router-link>
      </template>
      <template v-else>
        <router-link to="/login" class="header__login">
          <span>Войти</span>
        </router-link>
      </template>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "AppLayoutHeader",
  props: {
    isAuthorized: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters("Cart", ["totalPrice"]),
    ...mapState("Auth", ["isAuthenticated", "user"]),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("Auth/logout");
      this.$store.commit("Cart/setPhone", "");
      await this.$router.push("/");
    },
  },
};
</script>
