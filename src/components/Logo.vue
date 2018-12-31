<template>
  <div class="project-logo">
    <svg version="1.0" id="gb-logo-exa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="400px" height="400px" viewBox="0 0 400 400" xml:space="preserve">
      <title>GB Vue Crud Demo Logo</title>
      <polygon style="fill:none;stroke:#f9fafb;stroke-width:6;" points="374.5,300 200,400 25.5,300 25.5,100 200,0 374.5,100 "/>
      <polygon style="fill:none;stroke:#f9fafb; stroke-width:6;" points="342.4,318.8 168,381.6 25.5,262.9 57.5,81.3 232,18.4 374.5,137.1 "/>
      <polygon style="fill:none;stroke:#f9fafb;stroke-width:6;" points="310.4,330.7 141.8,359.8 31.5,229.2 89.6,69.3 258.2,40.2 368.5,170.8 "/>
      <polygon style="fill:rgba(255,255,255,0.1);stroke:#f9fafb;stroke-width:5;" points="279.3,336.4 121.5,335.9 42.2,199.5 120.7,63.6 278.5,64.1 357.8,200.5 "/>
    </svg>
    <header>
      <h1>GB Vue Crud Demo</h1>
    </header>
  </div>
</template>
<script>
  export default {
    components:{
      name: 'logo'
    },
    data(){
      return{}
    }
  }
</script>
<style scoped>
  svg{
    height: 50px;
    margin-right: 12px;
    width: 50px;
  }
  .project-logo{
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    line-height: 1;
  }
  .project-logo h1{
    font-size: 1em;
    margin: 0 20px 0 0;
    text-transform: uppercase;
  }
</style>