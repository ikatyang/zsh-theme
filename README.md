Forked from <https://gist.github.com/Ins1ne/3751033>

# My modified fork of agnoster.zsh-theme

A ZSH theme optimized for people who use:

- Solarized
- Git
- Unicode-compatible fonts and terminals

## Installation

1. Install [Powerline font](#powerline-font) if there is not.
2. Download [ikatyang.zsh-theme](https://github.com/ikatyang/zsh-theme/blob/master/ikatyang.zsh-theme) to `~/.oh-my-zsh/themes`
3. Edit `~/.zshrc`, set `ZSH_THEME` as `ikatyang`

  ```sh
  ZSH_THEME="ikatyang"
  ```

## Compatibility

To test if your terminal and font support it, check that all the necessary characters are supported by copying the following command to your terminal: `echo " ±  ➦ ✔ ✘ ⚡"`. The result should look like this:

![Character Example](https://github.com/ikatyang/zsh-theme/blob/master/images/character-example.png)

## Powerline Font

Require at least one Powerline font.

- [Powerline Fonts](https://github.com/powerline/fonts)
- [WenQuanYi Zen Hei Mono for Powerline](https://github.com/ikatyang/zsh-theme/blob/master/fonts/WenQuanYi-Zen-Hei-Mono-for-Powerline.ttf)
  - original font [WenQuanYi Zen Hei Mono](http://wenq.org/wqy2/index.cgi?Home)
  - mixed with 7 characters from [Powerline Fonts](https://github.com/powerline/fonts)

    ![Powerline Characters](https://github.com/ikatyang/zsh-theme/blob/master/images/powerline-characters.png)

## What does it show?

- Success ( ✔ ) or failure ( ✘ ) of previous command
- Hostname
- Python virtualenv
- Git status
  - Branch (  ) or detached head ( ➦ )
  - Current branch / SHA1 in detached head state
  - Dirty working directory ( ± , color change)
- Working directory
- Elevated (root) privileges ( ⚡ )

For correct show virtualenv name you should add `source ~/.zshrc` to ~/.virtualenvs/postactivate hook or run `echo 'source ~/.zshrc' >> ~/.virtualenvs/postactivate`

![Screenshot](https://github.com/ikatyang/zsh-theme/blob/master/images/screenshot.png)
