<template>
  <Projects :start="start" :projects="projects" :categories="categories" />
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const start = await $content('start').fetch()
    const projects = (await $content('projects').fetch()).filter((project) => {
      const categories = project.categories ? project.categories.split(',').map(category => category.trim()) : []
      return categories.includes('start');
    });
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
      start,
      projects,
      categories: menuRows
    }
  }
}
</script>
