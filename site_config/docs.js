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
            title: 'Halo框架概述',
            link: '/zh-cn/docs/halo/summary.html',
          },

          {
            title: '领域驱动设计',
            link: '/zh-cn/docs/ddd/intro.html',

          },
          {
            title: 'Halo设计',
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
                title: '扩展点设计',
                link: '/zh-cn/docs/halo/arch.html',
              },

              {
                title: '流程编排设计',
                link: '/zh-cn/docs/halo/arch.html',
              },
            ],
          },
          
        ],
      },
    ],
    barText: '文档',
  }
};
