import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'Halo Framework',
      briefIntroduction: 'Halo(光环)框架是基于领域驱动+CQRS+扩展点+流程编排的应用框架',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/demo1.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: 'https://github.com/SoftwareKing/halo',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '基于领域驱动CQRS带扩展点的应用框架',
      desc: 'Halo框架是基于CQRS+扩展点+流程编排的应用框架，致力于采用领域驱动的设计思想，规范控制程序员的随心所欲，从而解决软件的复杂性问题。 架构原则很简单，即在高内聚，低耦合，可扩展，易理解大的指导思想下，尽可能的贯彻OO的设计思想和原则。',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '基于领域驱动',
          content: '基于DDD的设计思想，将应用分为表现层，应用层，领域层，基础设施层',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'CQRS架构',
          content: '将应用程序的查询部分和命令部分完全分离，这两部分可以用完全不同的模型和技术去实现',
        },
        {
          img: '/img/feature_service.png',
          title: '扩展点设计',
          content: '基于扩展点设计思想，灵活优雅的扩展代码增加功能',
        },
        {
          img: '/img/feature_hogh.png',
          title: '流程编排',
          content: '流程编排，使流程节点功能复用，编排功能满足多样多形态的业务需求',
        },
        {
          img: '/img/feature_runtime.png',
          title: '架构治理',
          content: '架构治理，框架层面规范，控制程序员的随心所欲，解决软件的复杂性问题',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '代码防腐',
          content: '防腐层，代码防腐，助力业务架构演进升级，降低技术债',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/demo1.html',
      },
    },
    users: {
      title: '谁在使用Halo？',
      desc: <span>请在 <a rel="noopener noreferrer" target="_blank" href="https://github.com/SoftwareKing/halo/issues/14">Wanted: who&#39;s using halo</a> 上提供信息来帮助Halo做的更好。</span>,
      list: [
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'Halo Framework',
      briefIntroduction: 'some description of product',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/demo1.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: '',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'feature1',
          content: 'feature description',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'feature2',
          content: 'feature description',
        },
        {
          img: '/img/feature_service.png',
          title: 'feature3',
          content: 'feature description',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'feature4',
          content: 'feature description',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'feature5',
          content: 'feature description',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'feature6',
          content: 'feature description',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [
        '/img/users_alibaba.png',
      ],
    },
  },
};
