## vscode iced-coffee-script

>修改自 vscode-easy-coffeescript，保存.iced文件时，编译输出同名js文件到iced文件所在目录

#### 使用
> 前提：npm install -g iced-coffee-script

1. 下载[vscode-easy-icedcoffeescript-1.0.1.vsix](http://192.168.1.6/hule/vscode-iced/blob/master/vscode-easy-icedcoffeescript-1.0.1.vsix)
2. 选择从VSIX安装

#### 全局配置

文件-首选项-设置，加入以下配置项
```
"icedCoffeescript.compile": {
    "bare": false, // 编译到 JavaScript 时去掉顶层函数的包裹
    "sourceMap": false, // 是否输出map文件
    "files":[
        "**/*.iced"
    ]
}
```

更多参数见下方:>

[![Share via Facebook](https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/share/Facebook.png)](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript&quote=Git%20Notify) [![Share via Twitter](https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/share/Twitter.png)](https://twitter.com/intent/tweet?source=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript&text=Git%20Notify:%20https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript&via=mjkloubert) [![Share via Google+](https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/share/Google+.png)](https://plus.google.com/share?url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript) [![Share via Pinterest](https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/share/Pinterest.png)](http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript&description=Visual%20Studio%20Code%20extension%2C%20which%20receives%20and%20shows%20git%20events%20from%20webhooks.) [![Share via Reddit](https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/share/Reddit.png)](http://www.reddit.com/submit?url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript&title=Git%20Notify) [![Share via LinkedIn](https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/share/LinkedIn.png)](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript&title=Git%20Notify&summary=Visual%20Studio%20Code%20extension%2C%20which%20receives%20and%20shows%20git%20events%20from%20webhooks.&source=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript) [![Share via Wordpress](https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/share/Wordpress.png)](http://wordpress.com/press-this.php?u=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript&quote=Git%20Notify&s=Visual%20Studio%20Code%20extension%2C%20which%20receives%20and%20shows%20git%20events%20from%20webhooks.) [![Share via Email](https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/share/Email.png)](mailto:?subject=Git%20Notify&body=Visual%20Studio%20Code%20extension%2C%20which%20receives%20and%20shows%20git%20events%20from%20webhooks.:%20https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dmkloubert.vscode-easy-coffeescript)


[![Latest Release](https://vsmarketplacebadge.apphb.com/version-short/mkloubert.vscode-easy-coffeescript.svg)](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-easy-coffeescript)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/mkloubert.vscode-easy-coffeescript.svg)](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-easy-coffeescript)
[![Rating](https://vsmarketplacebadge.apphb.com/rating-short/mkloubert.vscode-easy-coffeescript.svg)](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-easy-coffeescript#review-details)

[Visual Studio Code](https://code.visualstudio.com) extension, which compiles [CoffeeScript](http://coffeescript.org/) files on save.

<kbd>
  <img src="https://raw.githubusercontent.com/mkloubert/vscode-easy-coffeescript/master/img/demo1.gif">
</kbd>

## Table of contents

1. [Install](#install-)
2. [How to use](#how-to-use-)
   * [Settings](#settings-)
3. [Support and contribute](#support-and-contribute-)
4. [Related projects](#related-projects-)
   * [vscode-helpers](#vscode-helpers-)

## Install [[&uarr;](#table-of-contents)]

Launch VS Code Quick Open (`Ctrl + P`), paste the following command, and press enter:

```bash
ext install vscode-easy-coffeescript
```

Or search for things like `vscode-easy-coffeescript` in your editor.

## How to use [[&uarr;](#table-of-contents)]

### Settings [[&uarr;](#how-to-use-)]

Open (or create) your `settings.json` in your `.vscode` subfolder of your workspace.

Add a `coffeescript.compile` section and one or more "watchers":

```json
{
    "coffeescript.compile": {
    }
}
```

| Name | Description |
| ---- | --------- |
| `bare` | `(true)` if output without the top-level function safety wrapper. Default: `(false)` |
| `exclude` | One or more [glob patterns](https://github.com/isaacs/minimatch) of files to exclude. |
| `files` | One or more [glob patterns](https://github.com/isaacs/minimatch) of files to include. Default: `**/*.coffee` |
| `header` | `(true)` if output the `Generated by CoffeeScript` header. Default: `(false)` |
| `inlineMap` | `(true)` if output the source map as a base64-encoded string in a comment at the bottom. Default: `(false)` |
| `isActive` | `(true)` if extension is active. Default: `(true)` |
| `options` | Additional [options](http://coffeescript.org/#nodejs-usage) for the compiler. |
| `sourceMap` | `(true)` to generate a source map. Default: `(true)` |

## Support and contribute [[&uarr;](#table-of-contents)]

If you like the extension, you can support the project by sending a [donation via PayPal](https://paypal.me/MarcelKloubert) to [me](https://github.com/mkloubert).

To contribute, you can [open an issue](https://github.com/mkloubert/vscode-easy-coffeescript/issues) and/or fork this repository.

To work with the code:

* clone [this repository](https://github.com/mkloubert/vscode-easy-coffeescript)
* create and change to a new branch, like `git checkout -b my_new_feature`
* run `npm install` from your project folder
* open that project folder in Visual Studio Code
* now you can edit and debug there
* commit your changes to your new branch and sync it with your forked GitHub repo
* make a [pull request](https://github.com/mkloubert/vscode-easy-coffeescript/pulls)

## Related projects [[&uarr;](#table-of-contents)]

### vscode-helpers [[&uarr;](#related-projects-)]

[vscode-helpers](https://github.com/mkloubert/vscode-helpers) is a NPM module, which you can use in your own [VSCode extension](https://code.visualstudio.com/docs/extensions/overview) and contains a lot of helpful classes and functions.
