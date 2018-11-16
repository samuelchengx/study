

## nginx安装

> 网址： http://nginx.org/

下载nginx-> 介绍目录 -> Configure -> 中间文件介绍 -> 编译 -> 安装

```
curl -O http://nginx.org/download/nginx-1.14.1.tar.gz
tar -xzf nginx-1.14.1.tar.gz
```

```
➜  nginx-1.14.1 ls -l
drwxr-xr-x@ 25 samuelcheng  staff     800 11  6 21:52 auto
-rw-r--r--@  1 samuelcheng  staff  287441 11  6 21:52 CHANGES
-rw-r--r--@  1 samuelcheng  staff  438114 11  6 21:52 CHANGES.ru
drwxr-xr-x@ 11 samuelcheng  staff     352 11 13 15:58 conf
-rwxr-xr-x@  1 samuelcheng  staff    2502 11  6 21:52 configure
drwxr-xr-x@  6 samuelcheng  staff     192 11  6 21:52 contrib
drwxr-xr-x@  4 samuelcheng  staff     128 11  6 21:52 html
-rw-r--r--@  1 samuelcheng  staff    1397 11  6 21:52 LICENSE
drwxr-xr-x@  3 samuelcheng  staff      96 11  6 21:52 man
-rw-r--r--@  1 samuelcheng  staff      49 11  6 21:52 README
drwxr-xr-x@  9 samuelcheng  staff     288 11  6 21:52 src
```

了解每个文件目录的功能，细节不解释

- 设置nginx vim高亮

```
./configure --help | more

```

- 查看安装提示，包含安装路径和模块的使用

```
./configure --prefix=PATH
```

- 生成中间文件objs , ngx_modules.c包含被编译进nginx的模块都会形成数组

编译
```
make
```

安装

```
make install
```

升级nginx编译的中间文件都放在objs中

```
➜  nginx ls -l
drwxr-xr-x  16 nobody       admin  512 11 14 17:19 cache
drwx------   2 nobody       admin   64 11 13 16:16 client_body_temp
drwxr-xr-x  18 samuelcheng  admin  576 11 14 18:25 conf
drwx------   2 nobody       admin   64 11 13 16:16 fastcgi_temp
drwxr-xr-x@  5 samuelcheng  admin  160 11 14 18:22 html
drwxr-xr-x   6 samuelcheng  admin  192 11 13 17:05 logs
drwx------  12 nobody       admin  384 11 13 18:37 proxy_temp
drwxr-xr-x   4 samuelcheng  admin  128 11 13 16:15 sbin
drwx------   2 nobody       admin   64 11 13 16:16 scgi_temp
drwx------   2 nobody       admin   64 11 13 16:16 uwsgi_temp
```

- conf决定nginx功能
- sbin为启动文件


## nginx语法

```
http {
    include       mime.types;
    default_type  application/octet-stream;

    #配置上游服务器
    include  vhost/virtual_server1.conf;
    upstream local {
        server 127.0.0.1:8080;
    }
    server {
        listen       80;
        server_name  192.168.26.173;
        access_log  logs/learn.access.log  main;
        location /report.html {
          alias /usr/local/Cellar/nginx/html/report.html;
        }
        location / {
            alias /Users/samuelcheng/Project/science_frontend/test/;
            autoindex on;
            index  index.html index.htm;
        }
    }
}
```


## nginx命令行

| 名称                       |  命令             |
| :------------------------ |  : -----------:   |
| 格式                       |  nginx -s reload |
| 帮助                       |  -? -h           |
| 使用指定的配置文件            |  -c              |
| 指定配置指令                 |  -g              |
| 指定运行目录                 |  -p               |
| 立刻停止服务                 |  stop             |
| 优雅的停止服务               |  quit             |
| 重载配置文件                 |  reload             |
| 重新开始记录日志文件           |  reopen             |
| 发送信号                     |  -t -T             |
| 测试配置文件是否有语法错误      |   -t -T             |
| 打印nginx的版本信息、编译信息等 |  -v -V             |



**重载配置文件**

```
sudo /usr/***/sbin/nginx -s reload
```

**热部署**

```
➜ ps -ef | grep nginx
0 20573     1   0 二04下午 ??         0:00.05 nginx: master process ./nginx
-2 32430 20573   0 三06下午 ??         0:01.45 nginx: worker process
-2 32431 20573   0 三06下午 ??         0:01.02 nginx: cache manager process
```

- 备份nginx文件 cp sbin/nginx  sbin/nginx.old
- 将新编译的nginx文件copy到sbin/下，此时向正在运行的nginx的master进程发送信号
- kill -USR2 20573，此时生成新的nginx进程，老的work也在运行，但是不在监听
- kill -WINCH 20573 发送信号，优雅的关闭老的nginx进程

**切割日志文件**

```javascript
function fn(arr){
    return Array.isArray(arr)
}
```





