module.exports = {
  title: '算法动画设计UI库',
  description: '用于直观描述各种算法运行流程的UI组件库',
  head: [['link', { rel: 'icon', href: 'https://www.npmjs.com/package/algorithm-design-ui' }]],
  port: '9090',
  docsDir: 'docs',
  siteConfig: {
    links: {
      github: 'https://github.com/calebman/algorithm-design-ui.git'
    }
  },
  themeConfig: {
    repo: 'https://github.com/calebman/algorithm-design-ui.git',
    nav: [{ text: '首页', link: '/' }, { text: '快速上手', link: '/posts/Quick/' }],
    sidebarDepth: 0,
    sidebar: {
      '/posts/': [
        group('快速上手', ['Quick/', 'Summary/']),
        group('Button 按钮', ['Button/TooltipButton/', 'Button/TooltipButtonGroup/']),
        group('Picker 选择器', ['Picker/IconPicker/']),
        group('Tree 树结构', ['Tree/OrgTree/']),
        group('Other 其他组件', ['Other/CountTo/', 'Other/CountDown/'])
      ]
    }
  },
  chainWebpack: (config, isServer) => {
    if (isServer) {
      config.module
        .rule('txt')
        .test(/\.(txt)$/)
        .use('raw-loader')
        .loader('raw-loader')
    }
  }
}
function group(title, children) {
  return { collapsable: false, title, children }
}
