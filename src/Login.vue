<template>
  <div>
    <h1>Login</h1>
    <main class="content">
      <div class="mainContent">
        <form>
          <input
            v-model="usuario"
            type="text"
            placeholder="Digite o nome de Usuário"
            name="usuario"
          />

          <br />
          <input
            v-model="senha"
            type="text"
            placeholder="Digite sua senha"
            name="senha"
          />
          <div class="button-center">
            <button class="button" @click="checkForm($event)">Entrar</button>
          </div>
          <br />
          <br />

          {{ this.errors.length > 0 ? this.errors[0] : "" }}
          <br />
          {{ this.errors.length > 0 ? this.errors[1] : "" }}

          {{ this.mensagem }}
          <router-view></router-view>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export const PROPRIETARIO = 1;
export const CLIENTE = 2;

export default {
  methods: {
    created() {
      console.log("created");
    },

    checkForm: function (e) {
      e.preventDefault();
      if (this.usuario && this.senha) {
        this.reqLogin(this.usuario, this.senha);
      }

      this.errors = [];

      if (!this.usuario) {
        this.errors.push("O usuário é obrigatório.");
      }
      if (!this.senha) {
        this.errors.push("A senha é obrigatória.");
      }

      console.log(this.errors);
    },

    reqLogin(username, password) {
      this.usuarioLogado = this.usuarios.find((u) => {
        return u.login === username && u.senha === Number(password);
      });

      console.log(this.usuarioLogado);

      if (this.usuarioLogado) {
        this.mensagem = "Usuário logado com sucesso";

        if (this.usuarioLogado.perfil === 1) {
          this.$router.push("/proprietario");
        } else {
          this.$router.push("/cliente");
        }
      } else {
        this.mensagem = "Erro ao logar usuário, verifique os dados!";
      }
    },
  },
  name: "App",
  components: {},
  data() {
    return {
      mensagem: null,
      usuarioLogado: null,
      errors: [],
      usuario: "",
      senha: "",
      usuarios: [
        {
          id: 1,
          nome: "Proprietario",
          login: "proprietario",
          senha: 12345,
          perfil: PROPRIETARIO,
        },
        {
          id: 2,
          nome: "Cliente",
          login: "cliente",
          senha: 12345,
          perfil: CLIENTE,
        },
      ],

      carros: [
        {
          id: 1,
          nome: "Ford 2000",
          marca: "Ford",
          cor: "branco",
          anoModelo: "2000",
          status: "Disponível",
        },
        {
          id: 2,
          nome: "Toyota 2011",
          marca: "Toyota",
          cor: "Preto",
          anoModelo: "2011",
          status: "Reservado",
        },
      ],
    };
  },

  created: function () {
    this.carros = JSON.parse(localStorage.getItem("carros"));
    window.localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    window.localStorage.setItem("carros", JSON.stringify(this.carros));
  },
};
</script>

<style scoped>
.mainContent {
  padding: 80px;
}

.mainContent form input {
  height: 3.125rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background: #fff;
  border: 1px solid #a8a8b3;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
}

.button {
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: #4953b8;
  color: #fff;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;
  width: 127px;
}
.button-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
