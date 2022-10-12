# How to properly start development containers

#### Dependencies
- [VsCode] - As usual Visual code edior (other acceptible option would be JBeans)
    - [Remote Development] For controling and managing development ocntainer right from the VsCode editor
- [Docker] is responcible for managing containers and its images.

#### Instalation
After both are successfully installed you need to install into VsCode: Remote Development ([Remote Development]) *(you have to ensure that docker engine is running properly. How to check?: [click here](https://www.kindacode.com/article/how-to-check-docker-desktop-and-docker-engine-versions/))*

Then you need to pull image form [GitLab] repository, for ensuring newest version of code and its working in dev container.
Command to clone repository from [GitLab] *(in CMD or PowerShell or VsCode terminal)*:
```sh
git clone git@gitlab.com:ivertadev/vsap_dev.git main
```
In VsCode you will be going to be asked to authenticate your user yoou simply choose your prefered method to confirm your idententy and ensuring. If you authenticated your account succesfully your editor should display all the application's code and additional files. **After successful pull** you going to use next commands  *(in CMD or PowerShell or VsCode terminal)*:
```sh
cd ./.devcontainer
```
and right after 
```sh
docker-compose up --build
```
And after it finishes composing you will have access to MySql(MariaDB) and phpMyAdmin for SQL management. To test them you can go to [localhost:6858](http://localhost:6858) all other information is provided below at *Additional information* tab.
After ensuring that everything is working properly,*if something doesn't work, go down in FAQ you propably will find an answer* , you can start the development container by pressing **F1** button and writing in *Dev Container: Reopen In Container* loading usually takes few minutes.
###### Need noting that if MariaDb isn't running you wont going to be able to properly debug
{hidden}

## FAQ
#### Settings in aplication if you get SQL error from debugger
##### Wrong application settings
```yml
Location: '.\target\classes'
File: 'application.properties'
Settings:
	Location: 
	    lines: 2 to 4
	Properties:
		spring.datasource.url=jdbc:mysql://db:3306/vspn?useUnicode=yes&characterEncoding=UTF-8
		spring.datasource.username=root
		spring.datasource.password=9VhOGz86DgdxLvUIbA09qCG3kVN7
```
##### Or it can be that MariaDb doesn't run (container stopped)
Then you can open [Docker] desktop application to see in containers tab if everything is in order or not.
#### There aren't *Dev Container: Reopen In Container*
##### Newer DevContainer version
You should check new commands for dev container plugin.
# Additional information
#### Tips and starting setup(links):
	https://code.visualstudio.com/docs/remote/containers
	vscode:extension/ms-vscode-remote.remote-containers
	https://github.com/microsoft/vscode-remote-try-java
#### SQL LOGIN DATA:
```yml
PASS: 9VhOGz86DgdxLvUIbA09qCG3kVN7
USER: root
DATABASE: vspn
SERVER: db
```
#### Default test user (after sql dump **)
```yml
USERNAME: test@test.test
PASSWORD: test
```
[//]: #
   [VsCode]: <https://code.visualstudio.com/>
   [Remote Development]: <https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack>
   [Docker]: <https://www.docker.com/>
   [GitLab]: <https://gitlab.com>