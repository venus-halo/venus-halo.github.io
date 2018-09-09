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
            title: '领域驱动',
            link: '/zh-cn/docs/ddd/intro.html',
            opened: false,
            children: [
              {
                title: '实体',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '值对象',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '领域服务',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '聚合与聚合根',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '边界上下文',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '工厂',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '仓储/资源库',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],

          },
          {
            title: 'Halo设计',
            opened: true,
            children: [
              {
                title: '架构设计',
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
