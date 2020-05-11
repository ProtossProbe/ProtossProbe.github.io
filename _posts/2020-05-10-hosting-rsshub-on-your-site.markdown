---
layout: post
title:  "使用 RSSHub 一键订阅 TA 的所有网络动态"
date:   2020-05-10 20:00:00 +0800
image:  /img/post-rsshub/eppz-Code_1_727px_crop.jpg
tags:   [随记]
---

一开始，我只是想实现一个很简单的需求；

怎么样用最便捷的手段，关注另一个人在社交网络上（Bilibili、知乎、微博、Twitter 等等）发布的全部动态（怎么听起来有点像跟踪狂 XD）？

经朋友推荐，[RSSHub](https://docs.rsshub.app/) 可以实现这个想要的功能。它是一个开源的，能够把本不支持 RSS 订阅的网站变成可订阅的强有力工具，能够支持大量的国内外主流网站。遗憾的是，在今年的四月份，[RSSHub 的主站](https://rsshub.app/) 已经被墙。要想在国内使用它的话，要么用别人的服务器，要么在自己的服务器上 Host RSSHub 服务。此外，RSSHub 主站疑似被国内的一些主流网站的反爬虫系统给屏蔽了，例如微博、知乎就无法通过 `https://rsshub.app` 获取到想要的订阅源。因此决定自己手动搭一下 RSSHub 服务。

# RSSHub 部署
首先，我需要一个服务器。[aws 云服务](https://aws.amazon.com/)的新用户能够免费试用一年，所以在这里就选它了！

得到免费服务器后，参考 RSSHub 官网上的[教程](https://docs.rsshub.app/install/#docker-compose-bu-shu)，就能够顺利完成部署。在这里，我选用的是 Docker Compose 来进行部署的。

随后，我将自己的子域名 `rss.probe.earth` 绑定给了这个新开的服务器地址。

在 RSSHub 成功运行后，我又下载一个和它搭配使用的 Chrome 浏览器插件——[RSSHub Radar](https://chrome.google.com/webstore/detail/rsshub-radar/kefjpfngnndepjbopdmoebkipbgkggaa/reviews)。这个插件能够自动识别适用于当前网站的 RSS 链接，并将它订阅到自己想要的 RSS 管理服务上面。在插件的配置页面，将默认的 RSSHub 域名修改成自己的服务器域名（注意需要添加端口号）：

{:refdef: style="text-align: center;"}
![修改 RSSHub 域名]({{site.baseurl}}/img/post-rsshub/screenshot_1.jpg)
*修改 RSSHub 域名*
{: refdef}

至此，RSSHub 的配置工作就完成了。现在，只要打开微博/知乎/B站，找到你想订阅的那个人的主页， RSSHub 插件就能自动返回给你所需的 RSS 链接：

{:refdef: style="text-align: center;"}
![订阅 B 站 UP 主的动态/投稿]({{site.baseurl}}/img/post-rsshub/screenshot_2.jpg)
*订阅 B 站 UP 主的动态/投稿*
{: refdef}

# Tiny Tiny RSS 部署
现在，我已经获取到了想到的 RSS 源，但如果想要在多平台同步自己的 RSS 阅读进度的话，我们还要使用其他的服务。

我先尝试使用了 [Feedly](https://feedly.com/)，但是 Feedly 的一个不足在于无法识别我自定义域名下的 RSS 链接，查证后发现这可能是因为服务器没有使用 `HTTPS` 导致的。

于是，我转向了另一套解决方案：在自己的服务器上部署 [Tiny Tiny RSS](https://tt-rss.org/)。这是一个开源的 RSS 订阅源阅读器，本身自带网页端，也能够修改主题。

关于如何部署，我参考了 [Awesome TTRSS](https://ttrss.henry.wang/zh/) 上的教程。根据自己的需求，我还安装了两个 TTRSS 插件，分别是 [Fever API](https://ttrss.henry.wang/zh/#fever-api) 和 [Remove iframe sandbox](https://ttrss.henry.wang/zh/#remove-iframe-sandbox)。在插件安装后，记得在 TTRSS 的偏好设置页面将它们启用。另外也可以在 RSSHub Radar 的设置里启用对于 Tiny Tiny RSS 的一键订阅支持！

# Reeder 4
安装了 Fever API 的 TTRSS 就能够成功导入到 [Reeder 4](https://reederapp.com/) 阅读器上啦！这个 RSS 阅读器支持 macOS 以及 iOS。此外，因为我们使用的是自架的 RSS 管理器，双端同步阅读进度也是能够实现的！

# 实现效果
最终实现的效果如下：
{:refdef: style="text-align: center;"}
![macOS 上的效果]({{site.baseurl}}/img/post-rsshub/screenshot_3.jpg)
*macOS 上的效果*
{: refdef}

{:refdef: style="text-align: center;"}
![macOS 上的效果]({{site.baseurl}}/img/post-rsshub/screenshot_4.jpg)
*iOS 上的效果*
{: refdef}

再也不用没日没夜地刷喜欢 Up 主的动态和微博了！让所有的信息都自动汇集到你的手中吧！

<br />

最后发一个小广告：

[PE 站（Probe@Earth）](https://probe.earth) 的 RSSHub Host 服务 和 TTRSS 管理服务现在面向全网开放：

* 使用 RSSHub：[http://rss.probe.earth:1200](http://rss.probe.earth:1200)
* 使用 TTRSS：[http://rss.probe.earth:8280/tt-rss/](http://rss.probe.earth:8280/tt-rss/)

<br />

以及~

要想及时阅读 Probe 的最新文章，请订阅本站的 [RSS 链接](https://probe.earth/feed.xml)吧！