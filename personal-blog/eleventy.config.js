module.exports = function(eleventyConfig) {
  // Copy assets directory
  eleventyConfig.addPassthroughCopy("assets");
  
  // Set input and output directories
  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    },
    
    // Use .html as the template engine
    templateFormats: ["html", "md", "liquid"],
    
    // Enable deep merge of data
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    
    // Set pathPrefix for GitHub Pages deployment
    pathPrefix: "/",
    
    // Configure collections
    collections: {
      // Create the posts collection sorted by date
      posts: function(collectionApi) {
        return collectionApi.getFilteredByGlob("posts/**/*.md").sort((a, b) => {
          return b.date - a.date; // Sort by date in descending order
        });
      }
    }
  };
};