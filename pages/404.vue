<template>
  <div>
    <div class="columns flex overflow-hidden">

      <div class="column flex-1">
        <div class="h-screen flex flex-col items-center justify-center h-full bg-gray-900 relative">
          <ProjectContent :project="four0four" :index="0" :count="1" />
        </div>
      </div>
      
      <div class="column flex-1 relative">
        <div class="fixed flex flex-col-reverse">
          <div class="h-screen flex flex-col items-center justify-center h-full bg-gray-900 relative">
            <Video v-if="four0four.video" :url="four0four.video" :index="0" />
          </div>
        </div>
      </div>
    </div>

    <Menu :categories="categories" />
  
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const start = await $content('start').fetch()      
    const four0four = await $content('404').fetch()
    const categories = await $content('categories').fetch()
    categories.unshift(start);

    const perRow = 3;
    const menuRows = categories.reduce((rows, category, index) => {
      const row = Math.floor(index/perRow);
      rows[row] = rows[row] || {row, columns: []} 
      rows[row].columns = rows[row].columns.concat(category); 
      return rows
    }, []);

    return {
      four0four,
      categories: menuRows
    }
  }
}
</script>
