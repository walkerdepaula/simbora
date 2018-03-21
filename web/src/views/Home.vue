<template>
  <div class="home">
    <img src="../assets/logo.png">

    <slick ref="slick" :options="slickOptions">
      <div class="content-test">
        <div class="conteudo">
          1
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          2
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          3
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          4
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          5
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          6
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          7
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          8
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          9
        </div>
      </div>
      <div class="content-test">
        <div class="conteudo">
          10
        </div>
      </div>
    </slick>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      slickOptions: {
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '170px',
              slidesToShow: 1
            }
          }
        ]
      },
    };
  },

  // All slick methods can be used too, example here
  methods: {
      next() {
          this.$refs.slick.next();
      },

      prev() {
          this.$refs.slick.prev();
      },

      reInit() {
          // Helpful if you have to deal with v-for to update dynamic lists
          this.$nextTick(() => {
              this.$refs.slick.reSlick();
          });
      },
  },
}
</script>

<style>
  .content-test {
    height: 300px;
    border: 1px solid black;
  }

  .conteudo {
    width: 90%;
    display: block;
    background: gray;
    margin: auto;
    height: 100%;
  }
</style>

