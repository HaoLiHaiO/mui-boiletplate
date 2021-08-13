- npm install @material-ui/core @material-ui/icons
- load default font "<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />"
<!-- Equivalent of normalize.css - kickstart a consistent baseline -->
- add CSSBaseline
<!-- Typography API -->
- [MUI Typography](https://material-ui.com/api/typography/)
- e.g.: variant, align, color, gutterBottom (if true, text has bottom 
margin), paragraph (if true, text has bottom margin)
- difference between paragraph and gutterBottom:
    - if paragraph set to true: <p>, else <span>, bottom margin = 16
    - if gutterBottom set to true: bottom margin = 0.35em