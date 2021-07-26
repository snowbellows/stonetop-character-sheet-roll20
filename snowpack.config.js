module.exports = {
  root: 'src',
  workspaceRoot: '/',
  plugins: ['snowpack-plugin-ejs', '@snowpack/plugin-sass'],
  devOptions: {
    openUrl: '/index.html',
  },
  buildOptions: {
    htmlFragments: true,
    out: 'build'
  },
};
