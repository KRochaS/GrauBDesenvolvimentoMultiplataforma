<template>
  <div>
    <div class="button-back">
      <button class="button-login" @click="backToLogin($event)">
        Voltar para Login
      </button>
    </div>
    <h1>Lista de Carros</h1>

    <br />
    <table id="customers" v-for="carro in this.carros" :key="carro.id">
      <tr>
        <!-- id: 2,
          nome: "Toyota 2011",
          marca: "Toyota",
          cor: "Preto",
          anoModelo: "2011",
          status: "Reservado", -->
        <th>Nome</th>
        <th>Marca</th>
        <th>Cor</th>
        <th>Ano Modelo</th>
        <th>Status</th>
      </tr>
      <tr>
        <td>{{ carro.nome }}</td>
        <td>{{ carro.marca }}</td>
        <td>{{ carro.cor }}</td>
        <td>{{ carro.anoModelo }}</td>
        <td>
          {{ carro.status }}
          <span v-if="carro.status === 'Disponível'">
            <br />
            <br />
            Reservar Veículo:
          </span>
          <input
            v-if="carro.status === 'Disponível'"
            type="radio"
            v-model="reservar"
            name="reservar"
          />
        </td>
      </tr>
    </table>
    <br />
  </div>
</template>

<script>
export default {
  name: "Cliente",

  data() {
    return {
      carros: [],
      reservar: null,
    };
  },
  created: function () {
    this.carros = JSON.parse(localStorage.getItem("carros"));

    console.log(this.carros);
  },
  methods: {
    backToLogin(e) {
      e.preventDefault();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 60px;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4953b8;
  color: white;
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
</style>
