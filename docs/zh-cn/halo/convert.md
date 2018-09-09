### Convertor设计

在Halo中有三类主要的对象：

* ClientObject: 也就是二方库中的数据对象，主要承担DTO的职责。
* Entity/ValueObject: 也就是既有属性又有行为的领域实体。
* DataObeject：是用来获取数据用的，主要是DAO使用。

![](https://raw.githubusercontent.com/SoftwareKing/halo/master/halo-docs/image/convertor.png)

Convertor在上面三个对象之间的转换起到了至关重要的作用，然而Convertor里面的逻辑应该是简单的，大部分都是setter/getter, 如果属性重复度很高的话，也可以使用BeanUtils.copyProperties让代码变得更简洁。

但事实情况是，现在系统中很多的Convertor逻辑并没有在Convertor里面。