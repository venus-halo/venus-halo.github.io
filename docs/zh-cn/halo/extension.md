## 扩展点概述

### 扩展点运用场景

### 扩展点概述
 在介绍什么是扩展点之前首先介绍什么是域，域相关的信息可以查看:[域相关介绍](./domain.md)。
* 每个功能域都会对外提供一系列的能力，比如订单域对外提供了订单拆单的能力。而每一个能力往往又是由多个扩展点组成。第一次接触扩展点，可能大家理解起来比较抽象。可以举个例子帮助大家理解，支付域提供了对外支付的能力，而支付方式有银行卡支付，银联支付，苹果支付，以及支付宝支付，微信支付等第三方支付，而支付能力对应的多种支付方式就是扩展点。
* 很多应用架构分层不合理，怎么解决呢?用扩展点的设计去解决。什么是扩展点的设计思想?其实设计思想也一直在使用，比如经常使用的策略模式，还有就是简单系统和简单场景编写的if-else代码。因此基于扩展点的设计思想是应用框架必备的设计思想。在Halo框架中扩展点的设计是通过自定义注解的方式去实现，扩展点注解的代码如下所示：
   
```java
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Target({ElementType.TYPE})
@Component
public @interface Extension {
    //扩展的Id
    String id() default "";
    //对应的扩展点Id
    String extensionPointId() default "";
    //扩展对应的描述
    String desc() default "";
    boolean defaultExtension() default false;
    //一级业务code
    String bizCode()  default CoreConstant.DEFAULT_BIZ_CODE;
    //可扩展业务code，属于预留，并不是每个系统都有
    String extBizCode() default CoreConstant.DEFAULT_EXT_BIZ_CODE;
}
```

### 什么是扩展点实现

  扩展点接口对应的实现就是扩展点实现。

