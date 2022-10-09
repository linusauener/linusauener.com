<template>
  <Projects
    :start="category"
    :projects="projects"
    :categories="categories"
    :cover="true"
  />
</template>
<script>
export default {
  async asyncData({ params, redirect, $content }) {
    const start = await $content("start").fetch();
    const categories = await $content("categories").fetch();

    const projects = (await $content("projects").fetch()).filter(project => {
      const categories = project.categories
        ? project.categories.split(",").map(category => category.trim())
        : [];
      return categories.includes(params.category);
    });

    const category = categories.find(item => item.slug === params.category);
    if (category) {
      categories.unshift(start);

      const perRow = 3;
      const menuRows = categories.reduce((rows, category, index) => {
        const row = Math.floor(index / perRow);
        rows[row] = rows[row] || { row, columns: [] };
        rows[row].columns = rows[row].columns.concat(category);
        return rows;
      }, []);

      return {
        category,
        projects,
        categories: menuRows
      };
    } else {
      redirect("/404");
    }
  }
};
</script>
