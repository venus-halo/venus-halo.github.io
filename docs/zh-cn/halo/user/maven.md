## Halo使用

### 引入 Halo Maven 依赖

目前安装到中央仓库,版本1.0.4

```xml
<halo.framework.version>1.0.4</halo.framework.version>

<!-- Halo框架核心 -->
<dependency>
    <groupId>org.xujin.halo</groupId>
    <artifactId>halo-core</artifactId>
    <version>${halo.framework.version}</version>
</dependency>

<!-- Halo测试组件可选-->
<dependency>
    <groupId>org.xujin.halo</groupId>
    <artifactId>halo-test</artifactId>
    <version>${halo.framework.version}</version>
    <scope>test</scope>
</dependency>


<!-- Halo能力采集图-->
<dependency>
    <groupId>org.xujin.halo</groupId>
    <artifactId>halo-collection</artifactId>
    <version>${halo.framework.version}</version>
</dependency>
```

案例:[crm-sales](https://github.com/SpringCloud/spring-cloud-code/tree/master/ch25)

