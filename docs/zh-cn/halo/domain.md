## 域概述

### 什么是域

* 在电商系统或者大型业务系统中都是按业务域的维度进行划分，比如交易下单系统有很十几个域:交付域，支付域，库存域，仓储域，价格域，配送等域。在应用框架层面，域的信息主要用于分类聚合，在应用系统开发中通过手动加注解的方式统一收集，在运营平台可以统一的管控，从业务域的角度去看哪些功能可以扩展定制，或者对其进行增强。
* 每个域都会对外提供一系列的能力，我们一般称之为对外提供的服务。比如库存域提供库存查询，扣减库存等服务。每次交易过程可能跨了N多个域完成，如果我们想知道一次交易参与其中每个域的调用顺序，或者域和域之间的依赖关系，我们也可以通过注解的方式去定义域提供的服务。域服务定义的注解可以查看源码`org.xujin.halo.annotation.domian.DomainService.java`。
 
```java
package org.xujin.halo.annotation.domian;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD})
public @interface DomainService {

    /**
     * 当前域的唯一编码
     * @return
     */
    String code();

    /**
     * 域服务的名称用于显示
     * @return
     */
    String name();

    /**
     * 当前域的描述
     * @return
     */
    String desc() default "";

    /**
     * 当前域服务的帮助url
     * @return
     */
    String helpUrl() default "";

    /**
     *  the domain ability codes
     * @return
     */
    String[] abilityCodes() default "";


}
```

### Halo中域的设计
Halo中域描述的注解定义如下所示:
域描述定义的注解可以查看源码org.xujin.halo.annotation.domian.Domain.java。

 ```java
package org.xujin.halo.annotation.domian;

import java.lang.annotation.*;

/**
 * 域描述注解
 * @author xujin
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Inherited
public @interface Domain {

    /**
     * 当前域的唯一code
     * @return
     */
    String code();

    /**
     * 父域的唯一code
     * @return
     */
    String parentCode() default "";

    /**
     * 当前域的名称
     * @return
     */
    String name();

    /**
     * 当前域的描述
     * @return
     */
    String desc() default "";

}
```



