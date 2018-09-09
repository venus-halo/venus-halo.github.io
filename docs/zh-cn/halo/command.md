## Command设计

### 什么是Command

* 什么是命令 (Command)?用户界面/展现层的读取或者写入操作都将被封装为一个命令，Command中将不会带有具体的业务逻辑。Command的实现涉及到三个东西,分别是命令对象(Command Object)，命令执行器(CommandExecutor)和命令总线(Command Bus)。后面会做详细的介绍。
* 在给Command类命名的时候，由于Command表示的是想要执行的命令，所以Command类的类名应当是动词的形式。例如RegisterCommand, ChangePasswordCommand等。其中的Command后缀则是可选的，只要在系统中统一规范命名即可。 
* 在实际项目中，我们需要注意Command的类名的重要作用，每个Command类的名称都清晰地表达了一个意图，例如ChangePasswordCommand清晰的表达了这个命令是要修改密码，所以千万不要随意"复用"Command，这里的“复用”指的是看到某两个Command中有完全一样的属性，为了减少几行代码就觉得没有必要使用两个Command，而把它们合并成一个Command，这样的"复用"会让系统变得越来越难以理解。 

### 什么是Command对象

Command对象的作用是用来封装命令数据，所以这类对象以属性为主，少量简单方法。但注意这些方法中不能包含业务逻辑。在Halo框架中我们高度抽象了一个Command对象继承了DTO，org.xujin.halo.dto.DTO主要实现了序列化接口,代码如下所示:

```java
package org.xujin.halo.dto;

import java.io.Serializable;

/**
 * Data Transfer object, including Command, Query and Response, 
 * 
 * Command and Query is CQRS concept.
 * 
 * @author xujin 
 */
public class DTO implements Serializable{

	private static final long serialVersionUID = 1L;

}
```

