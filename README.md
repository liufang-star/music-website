<h1 align="center">music-website</h1>

<br/>


## 项目说明

本音乐网站的客户端和管理端使用 **VUE** 框架来实现，服务端使用 **Spring Boot + MyBatis** 来实现，数据库使用了 **MySQL**。实现思路可以看[这里](https://yin-hongwei.github.io/2019/03/04/music/#more)；项目启动方法看文章末尾。

<br/>

## 项目预览


> 启动项目（springboot）

![image](https://user-images.githubusercontent.com/62829390/139010007-75f47074-0777-4e5d-94cd-ec303ca42bcd.png)

![image](https://user-images.githubusercontent.com/62829390/139010223-3e1e6335-0ebb-4483-a2bd-258ae7507445.png)


> 前台效果图(music-client 客户端  8080端口)

![image](https://user-images.githubusercontent.com/62829390/139011923-143ff3bd-cd41-479c-b044-aca228c1891e.png)

![image](https://user-images.githubusercontent.com/62829390/139011443-02b0775c-16ef-44c9-968b-233cab93c070.png)

![image](https://user-images.githubusercontent.com/62829390/139011495-a665c9b6-5d04-4442-ae62-29f5a594c6c1.png)


> 后台效果图(music-manage 服务端  8081端口)

![image](https://user-images.githubusercontent.com/62829390/139012099-18339c75-62dc-4b67-ae63-3ca7e003eee0.png)

![image](https://user-images.githubusercontent.com/62829390/139011638-bc572347-c0ba-4f48-9784-7a1cf395a2c7.png)

![image](https://user-images.githubusercontent.com/62829390/139011698-bf7f228c-cd66-4ad1-ad4a-ef8b5acf859f.png)


## 项目功能

- 音乐播放
- 用户登录注册
- 用户信息编辑、头像修改
- 歌曲、歌单搜索
- 歌单打分
- 歌单、歌曲评论
- 歌单列表、歌手列表分页显示
- 歌词同步显示
- 音乐收藏、下载、拖动控制、音量控制
- 后台对用户、歌曲、歌手、歌单信息的管理

<br/>

## 技术栈

### 后端

**SpringBoot + MyBatis**

### 前端

**Vue + Vue-Router + Vuex + Axios +  ElementUI**

<br/>

## 开发环境

JDK： jdk-8u251

mysql：mysql-5.7.21-1-macos10.13-x86_64

node：v12.4.0

IDE：IntelliJ IDEA 2020、VSCode

<br/>

## 下载运行

#### 1、下载项目到本地

```bash
git clone https://github.com/liufang-star/music-website.git
```

> 注意：资源整理了一下，按照下面的截图存放。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gsk65seqd8j30y00ocjt4.jpg" height="200px"/>

#### 2、修改配置文件
1）创建数据库
将 `music-website/music-server/sql` 文件夹中的 `tp_music.sql` 文件导入数据库。

2）修改用户名密码
修改 `music-website/music-server/src/main/resources/application.properties` 文件里的 `spring.datasource.username` 和 `spring.datasource.password`；

3）修改资源路径

修改 `music-server/src/main/java/com/example/yin/constant/Constants.java` 文件中的 `RESOURCE_PATH`，**否则资源加载不了**。

![](https://tva1.sinaimg.cn/large/008i3skNly1gske6w6kk8j33aq0u0wn2.jpg)

#### 4、启动项目

- **启动管理端**：进入 music-server 文件夹，运行下面命令启动服务器

```js
// 方法一
./mvnw spring-boot:run

// 方法二
mvn spring-boot:run // 前提装了 maven
```

- **启动客户端**：进入 music-client 目录，运行下面命令

```js
npm install // 安装依赖

npm run dev // 启动前台项目
```

- **启动管理端**：进入 music-manage 目录，运行下面命令

```js
npm install // 安装依赖

npm run dev // 启动后台管理项目
```

<br/>

## 赞助

如果此项目对你确实有帮助，欢迎给我打赏一杯咖啡～😄

![1bb65aedafd5959216ebbcf11f45075](https://user-images.githubusercontent.com/62829390/139014340-d456751c-b30c-4b25-a649-a578c3be8af3.jpg)


## License

Copyright (c) 2021 Yin-LiuFang

