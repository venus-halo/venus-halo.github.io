
![Halo-logo](/img/halo/docs/logo.png)
================
[![Build Status](https://api.travis-ci.org/softwareking/halo.svg?branch=master)](https://api.travis-ci.org/softwareking/halo)
[![GitHub release](https://img.shields.io/github/release/ctripcorp/apollo.svg)](https://github.com/softwareking/halo/releases)
[![Maven Central Repo](https://img.shields.io/maven-central/v/org.xujin.halo/halo.svg)](https://mvnrepository.com/artifact/org.xujin.halo)
[![codebeat badge](https://codebeat.co/badges/edb89c5e-9a43-4323-8e2f-0d3ca486dbb7)](https://codebeat.co/projects/github-com-softwareking-halo-master)

# 什么是Halo

欢迎来到 Halo 的世界！

## 1.Halo 概述

   Halo, 发音美 [ˈheɪloʊ]，和hello发音基本一致，中文名光环。Halo是Hallo的简写，是德语你好
的意思。Halo框架名寓意是赋能于业务应用开发，业务方使用者自带光环，脚踏七彩祥云，为业务开发造福，为业务架构治理和防腐提供统一的方法论。
Halo框架是基于CQRS+扩展点+流程编排的应用框架，致力于采用领域驱动的设计思想，规范控制程序员的随心所欲，从而解决软件的复杂性问题。
架构原则很简单，即在高内聚，低耦合，可扩展，易理解大的指导思想下，尽可能的贯彻OO的设计思想和原则。

Halo 的关键特性包括:

* **基于领域驱动思想**

    基于DDD的设计思想，将应用分为表现层，应用层，领域层，基础设施层


* **基于CQRS架构**

     将应用程序的查询部分和命令部分完全分离，这两部分可以用完全不同的模型和技术去实现


* **扩展点设计**
   
   基于扩展点设计思想，灵活优雅的扩展代码增加功能


* **流程编排**

    流程编排，使流程节点功能复用，编排功能满足多样多形态的业务需求

## 2.Halo架构

### 2.1 Halo架构

Halo框架架构图如下所示

![](/img/architecture.png)

关于如何在Spring Cloud中使用 Halo，请参考以下文档：

[Halo与Spring Cloud一起使用](./user/maven.md)



