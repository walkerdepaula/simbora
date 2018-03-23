<template>
  <div class="about">
    <h1>This is an about page</h1>

    <ul>
      <li v-for="user in users" :key="user.name">
        Email: {{ user.email }}
        Nome: {{ user.name }}
      </li>
    </ul>






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
export default {
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

