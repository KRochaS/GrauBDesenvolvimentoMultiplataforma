<template>
  <div>
    <div class="button-back">
      <button class="button-login" @click="backToLogin($event)">
        Voltar para Login
      </button>
    </div>
    <h1>Proprietário</h1>
    <main class="content">
      <div class="mainContent">
        <form>
          <input
            v-model="nome"
            type="text"
            placeholder="Digite o nome do carro"
            name="nome"
          />

          <br />
          <input
            v-model="marca"
            type="text"
            placeholder="Digite a marca"
            name="marca"
          />
          <br />
          <input
            v-model="cor"
            type="text"
            placeholder="Digite a cor"
            name="cor"
          />

          <br />
          <input
            v-model="anoModelo"
            type="text"
            placeholder="Digite o ano do modelo"
            name="anoModelo"
          />

          <br />
          <select v-model="status">
            <option disabled selected value="">Escolha o status</option>
            <option>Disponível</option>
            <option>Reservado</option>
            <option>Vendido</option>
          </select>

          <br />
          <div class="button-center">
            <button class="button" @click="checkForm($event)">
              Cadastrar Carros
            </button>

            {{ this.mensagem }}
          </div>
          <br />
          <br />
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Proprietario",
  created() {},
  data() {
    return {
      nome: null,
      marca: null,
      cor: null,
      anoModelo: null,
      status: null,
      mensagem: null,
    };
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();

      let carros = [];
      carros = JSON.parse(localStorage.getItem("carros"));

      console.log(carros);

      localStorage.clear();

      if (carros === null) {
        carros = [];
      }
      carros.push({
        id: carros.length + 1,
        nome: this.nome,
        marca: this.marca,
        cor: this.cor,
        anoModelo: this.anoModelo,
        status: this.status,
      });

      window.localStorage.setItem("carros", JSON.stringify(carros));

      this.mensagem = "Carro Cadastrado com sucesso!";
    },
    backToLogin(e) {
      e.preventDefault();
      this.$router.push("/");
    },
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

.mainContent form select {
  width: 26%;
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

.button-login {
  width: 165px;

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
}
.button-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
