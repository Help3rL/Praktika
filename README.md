# How to properly start development containers

## Dependencies

- [VsCode] - As usual Visual code editor (other acceptable option would be JBeans)
  - [Remote Development] For controlling and managing the development container right from the VsCode editor
- [Docker] is responsible for managing containers and it's images.

## Instalation

After both are successfully installed you need to install into VsCode: Remote Development ([Remote Development]) _(you have to ensure that the docker engine is running properly. How to check?: [click here](https://www.kindacode.com/article/how-to-check-docker-desktop-and-docker-engine-versions/))_

Then you need to pull an image from the [GitLab] repository, for ensuring the newest version of the code and it's working in the dev container.
Command to clone repository from [GitLab] _(in CMD or PowerShell or VsCode terminal)_:

```sh
git clone git@gitlab.com:ivertadev/vsap_dev.git main
```

In VsCode you will be going to be asked to authenticate your user you simply choose your prefered method to confirm your identity and ensure. If you authenticated your account successfully your editor should display all the application's code and additional files. **After successful pull** you going to use the next commands _(in CMD or PowerShell or VsCode terminal)_:

```sh
cd ./.devcontainer
```

and right after

```sh
docker-compose up --build
```

And after it finishes composing you will have access to MySql(MariaDB) and phpMyAdmin for SQL management. To test them you can go to [localhost:6858](http://localhost:6858) all other information is provided below in _Additional information_ tab.
After ensuring that everything is working properly,_if something doesn't work, go down in FAQ you probably will find an answer_ , you can start the development container by pressing the **F1** button and writing in _Dev Container: Reopen In Container_ loading usually takes few minutes.

### Need noting that if MariaDB isn't running you won't going to be able to properly debug

{hidden}

## FAQ

### Settings in the application if you get SQL error from debugger

#### Wrong application settings

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

#### Or it can be that MariaDB doesn't run (container stopped)

Then you can open the [Docker] desktop application to see in the containers tab if everything is in order or not.

### There aren't _Dev Container: Reopen In Container_

#### Newer DevContainer version

You should check new commands for the dev container plugin.

## Additional information

### Tips and starting setup(links)

```yml
    https://code.visualstudio.com/docs/remote/containers
    vscode:extension/ms-vscode-remote.remote-containers
    https://github.com/microsoft/vscode-remote-try-java
```

#### SQL LOGIN DATA

```yml
PASS: 9VhOGz86DgdxLvUIbA09qCG3kVN7
USER: root
DATABASE: vspn
SERVER: db
```

#### Default test user (after SQL dump **\*\***)

```yml
USERNAME: test@test.test
PASSWORD: test
```

##### (**\*\***)How to dump sql data?

After the application is successfully launched go to :
>[http://localhost:6858/index.php?route=/database/import&db=vspn](http://localhost:6858/index.php?route=/database/import&db=vspn)

_You will be required to login in to database login is provided at above of this section._

After that press on 'Import' at the top middle page (with a {:red_square::arrow_right:} red arrow icon).
When Import page opens in the section "File to import:" click browse button and choose provided SQL file (SQL_Import_FirstLaunch.sql).
When file is chosen, in the "Other options" deselect 'Enable foreign key checks' and then press
"Import" button at bottom of the page.

[//]: #
[vscode]: https://code.visualstudio.com/
[remote development]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack
[docker]: https://www.docker.com/
[gitlab]: https://gitlab.com
