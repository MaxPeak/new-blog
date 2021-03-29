## git

```shell
# 初始化本地仓库
git init
# 提交工作区文件到暂存区 <filename>可以使用通配符
git add <path || filename>
# 提交暂存区内容到本地仓库
git commit -m <description>
# 关联远程仓库
git remote add <remote> <path>
# 取消远程仓库关联
git remote remove <remote>
# 查看当前关联的仓库地址
git remote -v
# 推送本地分支到远程分支 如果想设置默认主机  可以用-u参数
git push <remote> <branch>
# 添加本地分支到远程分支
git push <remote> <local_branch>:<remote_branch>
# 下载远程分支但不合并
git fetch <remote>
# 拉取远程分支到本地并合并
git pull <remote> <branch>
# 克隆远程仓库到本地
git clone <remote>
# 创建分支
git branch <branch>
# 分支列表 名字前面有*的表示当前分支 -r为远程分支 -a为所有分支
git branch
# 切换分支
git checkout <branch>
# 创建分支并切换 -b表示创建并切换
git checkout -b <branch>
# 基于远程分支创建本地分支
git checkout -b <local_branch> <remote_branch>
# 合并指定分支到当前分支
git merge <branch>
# 撤销工作区修改
git checkout -- <filename>
# 创建分支并切换 -c表示创建并切换
git switch -c <branch>
# 切换分支
git switch <branch>
# 删除分支 -D 表示强制删除
git branch -d <branch>
# 删除远程分支
git push <remote> --delete <branch>
# 查看提交历史 添加--graph查看分支合并图
git log
# 查看命令历史
git reflog
# 查看当前分支状态
git status
# 回退版本 --hard(修改版本库，修改暂存区，修改工作区) --soft(修改版本库，保留暂存区，保留工作区) --mixed(修改版本库，修改暂存区，保留工作区)
git reset --hard <commit_id || HEAD> 回退版本
# 把暂存区的修改撤销掉，重新放回工作区
git reset HEAD
# 撤销commit，会新生成一个commit，不会修改历史提交记录
git revert -n <commit_id>
# 删除文件
git rm <filename>
# 储藏现在工作区的内容，一般用作合并冲突或者是临时修改bug时使用
git stash
# 储藏的内容列表
git stash list
# 恢复储藏的内容到工作区并且删掉储藏的内容
git stash pop
# 恢复储藏的内容到工作区但不删除储藏的内容
git stash apply
# 恢复多个储藏内容的某一个
git stash apply stash@{0}
# 将指定的commit应用于当前的分支
git cherry-pick <commit_id || branch>
# 查看git push 默认的远程分支名用什么命令
git branch -vv
# 从其他项目拉取commit到当前项目
git remote add <name> <url>
git fetch <name>
git cherry-pick <commit_id>或者git merge <name>/<branch>
```

## linux

```shell
# 命令指南 得到当前指令的完整说明 -k在不知道命令的名字时使用，检索关键字
man <command name> -k
# 进入指定目录 <path>的三个常用值 ..表示上一级目录 /表示根目录 -表示上次停留位置
cd <path>
# 列出当前路径的文件和目录 文件为灰色 目录为蓝色 -a参数可以查看隐藏文件
ls
# 显示当前工作路径
pwd
# 查看文件内容
cat <filename>
# 查看文件 按q退出 按v进入vi编辑
less <filename>
# 输出文件信息
file <filename>
# 检索文件 <dir>为需要检索的目标目录 -name为参数 表示按名字检索 <name>为名字，值为字符串需要带引号，可使用通配符
find <dir> -name <name>
# 创建目录
mkdir <dir-name>
# 创建文件
touch <filename>
# 复制 -r为递归参数(通用) 复制整个目录所有内容会用
cp <origin-path> <target-path>
# 移动 名称相同时当做重命名使用
mv <origin-path> <target-path>
# 删除 一般配合-r参数递归删除 -f表示不用确认，直接删除
rm <path>
# vi编辑 esc切换到命令模式 :q表示不保存修改直接退出 :w表示保存不退出 :wq表示保存并且退出
vi <path>
# root权限
sudo <command>
# finder打开
open <path>
# 终止命令
command + c
# 历史记录 使用的命名历史记录
history
# 关闭命令行
exit
# 查看网络通讯
ping <ip>
# 查看ip地址配置
ifconfig
# 查看磁盘空间
df <option>
# 查看文件大小 -h带单位 -s只显示总计
du <option> <path>
# 进程列表
lsof -i:端口号
# 关闭指定进程
kill -9 <pid>
# 字符串输出 <content>为字符串
echo <content>
# 重定向符
# > 表示将符号左侧的内容，以覆盖的方式输入到右侧文件中
echo "content" > file.txt
# >> 表示将符号左侧的内容，以追加的方式输入到右侧文件的末尾行中
echo "content" >> file.txt
# 管道符 <command1>执行结果传递给<command2>使用
<command1> | <command2>
# 逻辑或 <command1>执行成功 继续执行<command2> 否则不执行<command2>
<command1> && <command2>
# 逻辑或 <command1>执行失败 继续执行<command2> 否则不执行<command2>
<command1> || <command2>
# 查找文件里符合条件的字符串
grep <option> <content> <path>
```

## npm

```shell
# 初始化
npm init -y
# 通过脚手架创建项目
npm init <pkgName> <projectName>
# 安装包 不传<pkgName>默认全部 @<version>为指定版本
npm install <pkgName> @<version>
# 卸载包 -g表示全局
npm uninstall <pkgName> -g
# 更新包
npm update <pkgName>
# 登录npm
npm login
# 上传包
npm publish
# 删除包
npm unpublish -f <pkgName>
# 查看全局安装包 --depth 表示指定深度
npm list -g --depth 0
# 查看包的全部版本
npm view <pkgName> versions
# 查看npm 全局安装的根目录
npm bin
```

## yarn

```shell
# 通过脚手架创建项目
yarn create <pkgName> <projectName>
# 安装包 不传<pkgName>默认全部 @<version>为指定版本
yarn add <pkgName> @<version>
# 卸载包 -g表示全局
yarn remove <pkgName> -g
# 更新包
yarn upgrade <pkgName>
# 查看全局安装包 --depth 表示指定深度
yarn list -g --depth=0
# 查看yarn 全局安装的根目录
yarn global bin
```

## nvm

```shell
# 查看版本
nvm --version
# 下载指定版本
nvm install <version>
# 删除指定版本
nvm uninstall <version>
# 切换指定版本
nvm use <version>
# 现在已安装列表
nvm ls
# 设置别名
nvm alias
# 删除别名
nvm unalias
```

## nrm

```shell
# 查看版本
nrm --version
# 源列表
nrm ls
# 切换源
nrm use <registry>
# 添加源
nrm add <registry> <url> [home]
# 删除源
nrm del <registry>
# 测试源速度 不带<registry>默认所有
nrm test <registry>

```

## homebrew

```shell
# 帮助信息
brew help
# 查看版本
brew -v
# 更新homebrew自己
brew update
# 安装包
brew install <pkgName>
# 查询可更新的包
brew outdated
# 更新包 pakName不传默认所有
brew upgrade <pkgName>
# 清理旧版本 pakName不传默认所有 -n表示只查看不执行
brew cleanup <pakName> -n
# 卸载包
brew uninstall <pakName>
# 查看包信息
brew info <pakName>
# 安装列表
brew list
# 查询可用包
brew search <pakName>
```
