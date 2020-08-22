Hackathon 项目
祝大家玩得开心。收获多多。

效率是一切，下面是提高效率的方法，欢迎补充
1. 安装了 prettier
配置快捷键让你写的更舒服

2. 安装了 less


TODO
1. 添加 antd
2. 添加基于 localstorage 的数据维护。
基本思路是：
    context 里面的 useEffect 会根据 storeName 拉取 storage 中对应的 json（如果没有就执行初始化数据。并保存到 localstorage 中）
    数据被保存在 store 中
    GET 通过 useContext 引入。默认 GET 对应 store 的所有数据。（也可以通过 GET 重新刷新数据）
    CRUD 通过 save()。并且更新 store。
    