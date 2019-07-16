###一、常用命令：

	mkdir demo：创建一个demo空文件夹
	pwd：显示当前目录的路径
	cat index.html：查看index.html文件内容
	git init：把当前的目录变成可以管理的git仓库，生成隐藏的.git文件夹
	git add inedx.html：把index.html文件添加到暂存区
	git commit -m “提交说明”：提交文件 -m后面的是本次提交说明
	git status：查看仓库状态
	git log：查看历史记录
	git reset --hard HEAD^：往上回退一个版本
	git reflog：查看历史记录的版本号id
	git checkout -- index.html：把index.html文件在工作区的修改全部撤销
	git rm index.html：删除inedx.html文件
	git remote add origin https://github.com/xxxxx/a.git 关联一个远程库（origin是远程库的别名，可以更改）
	git push -u origin master：把当前分支推送到远程库master分支（第一次推送要追加-u，以后可以不用追加）
	git clone https://github.com/xxxxx   克隆远程库到本地（第一次获取代码时使用）
	git checkout -b dev：创建一个新的dev分支 并切换到dev分支上
	git branch：查看当前所有的分支以及现在所处分支
	git checkout dev：切换到dev分支
	git merge dev：把dev分支合并到当前分支
	git branch -d dev：删除dev分支
	git remote：查看远程库信息
	git remote -v查看远程库的详细信息
	git pull origin master 将远程库的master分支内容拉取到本地的当前分支,并自动合并
	git push origin master：把本地当前分支内容推送给远程master分支

###二、不小心关联错了仓库,怎么办？
 
	* 暴力解决：删除.git，重新建立本地仓库
	* 优雅解决：git remote remove origin，再在重新关联仓库


###三、pull和fetch的区别？
	* git pull origin master
		* 将远程仓库的master分支上代码版本复制/合并到本地master分支上
	* git fetch origin master:dev
		* 新建了一个dev分支，将远程仓库的master分支上代码版本复制到dev分支上
		* 就一定不会产生冲突
		* git diff master dev对比两分支内容，观察会不会产生冲突
		* 如果会，先解决，在合并分支。如果不会，就直接合并分支