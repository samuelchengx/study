# git多账户配置

    cd ~/.ssh
    ssh-keygen -t rsa -C "676822037@qq.com" -f "github_id_rsa"
    ssh-keygen -t rsa -C "chengxx@knowbox.cn" -f "gitee_id_rsa"


    ls -l
    -rw-------  1 samuelcheng  staff  1679 11 15 19:49 github_id_rsa
    -rw-r--r--  1 samuelcheng  staff   398 11 15 19:49 github_id_rsa.pub
    -rw-------  1 samuelcheng  staff  1679 10 23 15:06 gitee_id_rsa
    -rw-r--r--  1 samuelcheng  staff   400 10 23 15:06 gitee_id_rsa.pub


    vi config
    # gitee
    Host gitee.com
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee_id_rsa

    # github
    Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_id_rsa

    vim ~/.gitconfig
    [user]
    	name = samuelcheng
    	email = chengxx@knowbox.cn

    [user]
	    name = samuelcheng
	    email = chengxx@knowbox.cn