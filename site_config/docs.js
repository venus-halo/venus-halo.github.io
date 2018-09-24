export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: 'Halo文档',
        children: [

          {
            title: '什么是Halo',
            link: '/zh-cn/docs/halo/summary.html',
          },

          {
            title: '领域驱动设计',
            link: '/zh-cn/docs/ddd/intro.html',

          },
          {
            title: 'Halo设计',
            opened: true,
            children: [
              {
                title: '架构设计',
                link: '/zh-cn/docs/halo/arch.html',
              },

              {
                title: 'CQRS设计',
                link: '/zh-cn/docs/halo/arch.html',
              },

              {
                title: 'Domain设计',
                link: '/zh-cn/docs/halo/domain.html',
              },

              {
                title: '扩展点设计',
                link: '/zh-cn/docs/halo/extension.html',
              },

              {
                title: 'convertor设计',
                link: '/zh-cn/docs/halo/convert.html',
              },
              
              {
                title: 'Command设计',
                link: '/zh-cn/docs/halo/command.html',
              },

              {
                title: '流程编排设计',
                link: '/zh-cn/docs/halo/flow.html',
              },
            ],
          },
          
          {
            title: '使用指南',
            opened: true,
            children: [
              {
                title: '引入Maven依赖',
                link: '/zh-cn/docs/halo/user/maven.html',
              },
              {
                title: 'Halo与Spring Cloud使用',
                link: '/zh-cn/docs/halo/user/maven.html',
              },
            ],
          },

        ],
      },
    ],
    barText: 'Halo文档',
  }
};
