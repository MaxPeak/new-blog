## 基础环境

[常用命令](/helper/command#linux)

### 恢复出厂

- 首先重启 Mac，同时按住 command + option + R 键进入恢复模式
- 选择Wi-Fi联网
- 选择磁盘工具–如果磁盘空间不足可以删除当前系统的数据卷，然后新建一个数据卷
- 然后返回主页面，选择install Big Sur
  - 如果出现电脑开机提示硬盘锁定
  - 打开硬盘工具删除掉未挂载的那个空数据卷
  - 然后重启
### 装机必备

- SwitchHosts
- Homebrew
- oh-my-zsh
- Visual Studio Code
- Chrome
- ClashX
- Proxifier
- Alfred4

### 可选

- Iterm2
- Mounty
- IINA
- eZip
- typora
- xmind
- postman
- sourcetree
- teamviewer
- docker
- zoom/腾讯会议
- 微信
- qq
- 企业微信

### 配置

- DNS
  - 114.114.114.114（国内移动、电信和联通通用）
  - 8.8.8.8（Google）
- Homebrew
  - Git
    - git config --global user.name 'xxx'
    - git config --global user.email 'xxx'
    - ssh-keygen -t rsa（生成ssh）
    - cat ~/.ssh/id_rsa.pub复制ssh到GitHub ssh
  - nvm
    - 创建nvm工作目录
    - 在~/.zshrc添加nvm配置
      ```
      export NVM_DIR="$HOME/.nvm"
      [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
      [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
      ```
- Npm
  - yarn
  - nrm
  - commitizen
  - git-cz
- Alfred4
  - https://www.baidu.com/s?wd={query}
  - https://github.com/search?q={query}
  - https://developer.mozilla.org/zh-CN/search?q={query}
  - https://www.merriam-webster.com/dictionary/{query}
  - https://www.npmjs.com/search?q={query}
  - http://fanyi.youdao.com/
  - https://zh.javascript.info/search/?query={query}
- SwitchHosts
  - 199.232.68.133	raw.githubusercontent.com （解决GitHub DNS污染问题）

## vscode

### 常用快捷键

```
command + b 切换侧边栏
command + d 选中当前句段
command + f 搜索当前文件
command + c 复制
command + v 粘贴
command + x 剪切
command + o 打开目录/文件
command + z 撤销
command + shift + z 前进
command + / 注释
command + | 向右拆分新窗口
command + , 打开编辑器配置文件
command + j 打开编辑器自带终端
command + w 关闭当前tab窗口
command + enter 在当前行下方插入新行
command + s 保存
command + a 全选
command + q 退出程序
command + p 快速打开文件
command + left 移动到行首
command + right 移动到行尾

command + shift + enter 在当前行上方插入新行
command + shift + | 跳转到花括号的闭合处
command + shift + p 全局命令面板
command + shift + k 删除当前行
command + shift + n 新打开一个编辑器窗口

command + option + r 打开文件管理器
command + option + top/bottom 插入光标
command + option + f 替换

option + up/down 上下移动当前行
option + left/right 单词句段之前的跳转

option + shift + up/down 向上/下复制
option + shift + f 代码格式化

option + click 插入光标
```

### 常用插件

- GitLens
- Eslint
- Prettier
- Vetur

### 可选

- Live Server
- i18n Ally
- Auto Close Tag
- Auto Rename Tag

## chrome

### 常用快捷键

```
command + w 关闭当前tab
command + n 打开新窗口
command + f 搜索
command + r 刷新
command + t 新打开tab
command + option + i 打开控制台
command + shift + n 新窗口打开无痕模式
command + shift + t 恢复上次打开的网页
command + shift + delete 删除浏览器缓存
```

### 常用插件

- Adblock Plus
- FeHelper
- Octotree
- 沙拉查词
- Web Vitals

### 可选

- 掘金
- React Developer Tools
- Vue.js devtools
