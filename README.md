Todos left: 

- Header and Filters-Sidebar should be two different components for mobile and desktop Layout. Depending on the user device either one or the other component should be rendered. Therefore complex CSS media queries can be omitted.
- The infinite slideshow has been made by inserting a style tag with dynamically generated keyframes. This is an anti-pattern for React.
- The CustomLink in each slide leads to a path defined while inserting. Each slide should reference an existing project document. (n:1)
- Support more languages (with i18n)